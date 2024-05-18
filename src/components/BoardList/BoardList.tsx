import { FC, useRef, useState } from "react";
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  booardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";

interface IBoardListProps {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

const BoardList: FC<IBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    inputRef.current?.focus();
  };

  return (
    <div className={container}>
      <div className={title}>게시판:</div>
      {boards.map((board, idx) => (
        <div
          key={idx}
          className={clsx(
            {
              [booardItemActive]:
                boards.findIndex((b) => b.boardId === activeBoardId) === idx,
            },
            {
              [boardItem]:
                boards.findIndex((b) => b.boardId === activeBoardId) !== idx,
            }
          )}
          onClick={() => setActiveBoardId(boards[idx].boardId)}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} inputRef={inputRef} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
