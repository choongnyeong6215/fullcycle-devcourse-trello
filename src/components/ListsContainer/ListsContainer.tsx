import { FC } from "react";
import { IList } from "../../types";
import List from "../List/List";
import ActionButton from "../ActionButton/ActionButton";
import { listsContainer } from "./ListsContainer.css";

interface IListsContainerProps {
  boardId: string;
  lists: IList[];
}

const ListsContainer: FC<IListsContainerProps> = ({ boardId, lists }) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <List key={list.listId} boardId={boardId} list={list} />
      ))}
      {/* 신규 보드 생성 버튼 */}
      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListsContainer;
