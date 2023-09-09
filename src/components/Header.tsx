import { css } from "@emotion/react";
import { Button } from "./Button";
import { UserIcon } from "./icons/UserIcon";
import deta from "~/assets/images/logo.png";
import { User } from "~/types";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  user?: User | null | undefined;
};

export const Header = ({ user }: HeaderProps) => {
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await fetch("/api/auth/signOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    });
  };

  return (
    <header css={header}>
      <img css={imageStyle} src={deta} alt="ロゴ" />
      {user ? (
        <div css={buttons}>
          <Button onClick={signOutHandler} color="secondary">
            Sign out
          </Button>
          <UserIcon imageUrl={user.iconImageUrl} />
        </div>
      ) : (
        <div css={buttons}>
          <Button onClick={() => navigate("/auth/login")} css={buttonStyle}>
            Login
          </Button>
          <Button
            onClick={() => navigate("/auth/signup")}
            css={buttonStyle}
            color="secondary"
          >
            Sign up
          </Button>
        </div>
      )}
    </header>
  );
};

const imageStyle = css`
  width: 100px;
`;

const header = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

const buttons = css`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const buttonStyle = css`
  font-size: 1.3rem;
  padding: 8px 15px;
  margin-bottom: 0;
`;
