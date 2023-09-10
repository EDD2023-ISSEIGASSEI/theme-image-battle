import { USER_STATUS_LIST } from "~/data";
import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";

export const TurnResultScreen = () => {
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
          <h1>お題</h1>
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <p>三味線</p>
            <p>を演奏する</p>
            <p>ピカチュウ</p>
          </div>
        </div>
        <label>
          画像生成指示
          <TextInput placeholder="text" />
        </label>
        <Button>決定</Button>
      </div>
    </>
  );
};
