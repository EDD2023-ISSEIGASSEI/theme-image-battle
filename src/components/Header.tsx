import { css } from "@emotion/react";
import { Button } from "./Button";
import { UserIcon } from "./icons/UserIcon";

type HeaderProps = {
  imageUrl: string;
};

export const Header = ({ imageUrl }: HeaderProps) => {
  return (
    <header css={header}>
      <img src="/src/assets/images/logo.png" alt="ロゴ" />
      {imageUrl ? (
        <div css={buttons}>
          <Button color="secondary">Sign out</Button>
          <UserIcon imageUrl={imageUrl} />
        </div>
      ) : (
        <div css={buttons}>
          <Button>Login</Button>
          <Button color="secondary">Sign up</Button>
        </div>
      )}
    </header>
  );
};

const header = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttons = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;
