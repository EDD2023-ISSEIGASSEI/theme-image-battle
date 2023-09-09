import { css } from "@emotion/react";
import { Header } from "../../components/Header";
import { AuthOTPFormCard } from "../../components/cards/AuthOTPFormCard";
import { useState } from "react";

export const OtpPage = () => {
  const [otp, setOtp] = useState("");

  const onClick = () => {
    (async () => {
      await fetch("/api/auth/lineRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          otp
        })
      });

      console.log(typeof otp);
    })();
  };

  return (
    <div css={pageContainer}>
      <Header />
      <div css={cardContainer}>
        <AuthOTPFormCard otp={otp} setOtp={setOtp} onClick={onClick} />
      </div>
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const cardContainer = css`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
