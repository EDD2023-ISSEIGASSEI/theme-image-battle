import { css } from '@emotion/react';
import { Header } from '../Header';
import { ROOM_LIST } from '~/data';
import { RoomCard } from '../RoomCard';
import { SearchForm } from '../SearchForm';

export const SearchRoomScreen = () => {
  return (
    <div css={pageContainer}>
      <Header imageUrl={null} />
      <div css={bodyStyle}>
        <SearchForm placeholder="部屋ID検索" />
        <div css={formContainerStyle}>
          {ROOM_LIST.map((room) => (
            <RoomCard key={room.id} name={room.name} id={room.id} currentPeople={room.currentPeople} />
          ))}
        </div>
      </div>
    </div>
  );
}

const pageContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const bodyStyle = css`
  max-width: 600px;
  margin: 50px auto;
`;


// 二列で表示
const formContainerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
`;

