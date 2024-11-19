"use client";

import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

interface ChannelTalkProps {
  pluginKey: string | undefined;
}

// 채널톡 스크립트 로드 함수
const loadChannelScript = async (pluginKey: string): Promise<void> => {
  try {
    await ChannelService.loadScript();
    ChannelService.boot({
      pluginKey,
    });

    // 채널톡 버튼 표시
    ChannelService.showChannelButton();
  } catch (err) {
    console.error("ChannelTalk 스크립트 로드 실패:", err);
  }
};

// 커스텀 훅
const useChannelTalk = ({ pluginKey }: ChannelTalkProps): void => {
  useEffect(() => {
    if (!pluginKey) {
      console.error(
        "환경변수 'NEXT_PUBLIC_CHANNELTALK_PLUGIN_KEY'가 정의되지 않았습니다."
      );
      return;
    }

    const initializeChannelTalk = async () => {
      await loadChannelScript(pluginKey);
    };

    initializeChannelTalk();

    return () => {
      ChannelService.shutdown();
    };
  }, [pluginKey]);
};

// 메인 컴포넌트
const ChannelTalk = () => {
  const pluginKey = process.env.NEXT_PUBLIC_CHANNELTALK_PLUGIN_KEY;
  useChannelTalk({ pluginKey });

  return null;
};

export default ChannelTalk;
