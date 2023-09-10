import { USER_STATUS_LIST } from "~/data";
import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";

export const ResponseCheckScreen = () => {
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
            ほんとは隠す
            <TextInput placeholder="left" />
            <p>を演奏する</p>
            <TextInput placeholder="right" />
          </div>
          <p
            css={css`
              font-size: 2rem;
            `}
          >
            200pt
          </p>
        </div>
        <div>
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <Button>前の人へ</Button>
            <Button>次の人へ</Button>
          </div>
        </div>
      </div>
    </>
  );
};
