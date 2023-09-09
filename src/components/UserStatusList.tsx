import { css } from "@emotion/react";
import { Divider } from "./Divider";
import { UserStatus, UserStatusProps } from "./UserStatus";

type UserStatusListProps = {
  userStatusList: UserStatusProps[];
};

export const UserStatusList = ({ userStatusList }: UserStatusListProps) => {
  return (
    <div css={wrapper}>
      <ul css={list}>
        {userStatusList.map((user) => (
          <li key={user.id}>
            <UserStatus
              id={user.id}
              name={user.name}
              score={user.score}
              isAction={user.isAction}
              role={user.role}
            />
          </li>
        ))}
      </ul>
      <Divider direction="vertical" />
    </div>
  );
};

const wrapper = css`
  display: flex;
  gap: 58px;
`;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
