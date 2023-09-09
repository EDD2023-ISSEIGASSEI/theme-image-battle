import { css } from "@emotion/react";
import { Header } from "../../components/Header";
import { AuthOTPFormCard } from "../../components/cards/AuthOTPFormCard";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { colors } from "~/styles/themes/colors";
import { User } from "~/types";

export const CheckOtpPage = () => {
  const [otp, setOtp] = useState("");
  const user = useLoaderData() as User;
  const navigate = useNavigate();

  const onClick = () => {
    (async () => {
      try {
        await fetch("/api/auth/checkOtp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            otp
          })
        });

        navigate("/");
      } catch (e) {
        console.error(e);
      }
    })();
  };

  return (
    <div css={pageContainer}>
      <Header user={user} />
      <div css={cardContainer}>
        <AuthOTPFormCard setOtp={setOtp} otp={otp} onClick={onClick} />
      </div>
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${colors.primary};
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
