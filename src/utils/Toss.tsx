"use client";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";

// 결제 금액 타입 정의
interface Amount {
  currency: string;
  value: number;
}

export function CheckoutPage() {
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const customerKey = "KRBo_MxDRTWABhZ06hRCR";

  // 상태 정의
  const [amount, setAmount] = useState<Amount>({
    currency: "KRW",
    value: 50000,
  });
  const [ready, setReady] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [widgets, setWidgets] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey);
      const widgets = tossPayments.widgets({
        customerKey,
      });
      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) return;

      await widgets.setAmount(amount);

      await Promise.all([
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets, amount]);

  useEffect(() => {
    if (widgets) {
      widgets.setAmount(amount);
    }
  }, [widgets, amount]);

  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const couponApplied = event.target.checked;
    setAmount((prev) => ({
      ...prev,
      value: couponApplied ? 45000 : 50000,
    }));
  };

  const handlePayment = async () => {
    if (!widgets) return;

    try {
      await widgets.requestPayment({
        orderId: "eGP907-p_iiUrDsrhVAuR",
        orderName: "토스 티셔츠 외 2건",
        successUrl: window.location.origin + "/success",
        failUrl: window.location.origin + "/fail",
        customerEmail: "customer123@gmail.com",
        customerName: "김토스",
        customerMobilePhone: "01012341234",
      });
    } catch (error) {
      console.error(error);
      setError("결제 요청 중 오류가 발생했습니다."); // 에러 메시지 설정
    }
  };

  return (
    <div className="wrapper">
      <div className="box_section">
        <div id="payment-method" />
        <div id="agreement" />
        <div>
          <label htmlFor="coupon-box">
            <input
              id="coupon-box"
              type="checkbox"
              disabled={!ready}
              onChange={handleCouponChange}
            />
            <span>5,000원 쿠폰 적용</span>
          </label>
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* 에러 메시지 표시 */}
        <button className="button" disabled={!ready} onClick={handlePayment}>
          결제하기
        </button>
      </div>
    </div>
  );
}
