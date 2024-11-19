"use client";

import { useEffect, useState } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

const ChannelTalk = () => {
  const pluginKey = process.env.NEXT_PUBLIC_CHANNELTALK_PLUGIN_KEY;
  const [isChannelLoaded, setIsChannelLoaded] = useState(false);

  useEffect(() => {
    // 환경변수 검증
    if (!pluginKey) {
      console.error("'NEXT_PUBLIC_CHANNELTALK_PLUGIN_KEY' 잘못된 듯 확인pls!");
      return;
    }

    // 채널톡 초기화 함수
    const resetChannelTalk = async () => {
      try {
        await ChannelService.loadScript();
        ChannelService.boot({
          pluginKey,
        });
        ChannelService.showChannelButton(); // 채널톡 기본 버튼 표시
        setIsChannelLoaded(true);
      } catch (err) {
        console.error("ChannelTalk 초기화 실패:", err);
      }
    };

    resetChannelTalk();

    // 컴포넌트 언마운트 시 종료
    return () => {
      ChannelService.shutdown();
    };
  }, [pluginKey]);

  return <></>;
};

export default ChannelTalk;
