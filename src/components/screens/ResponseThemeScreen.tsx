import { USER_STATUS_LIST } from "~/data";
import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";

export const ResponseThemeScreen = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <ul>
            <li>
              <UserStatusList userStatusList={USER_STATUS_LIST} />
            </li>
          </ul>
          <Divider direction="vertical" />
        </div>
        <div>
          <Timer time={20} />
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <TextInput placeholder="left" />
            <p>を演奏する</p>
            <TextInput placeholder="right" />
          </div>
        </div>
        <Button>決定</Button>
      </div>
    </>
  );
};
