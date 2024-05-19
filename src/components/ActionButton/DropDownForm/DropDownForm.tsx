import { FC, useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardsSlice";
import { v4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";
import {
  button,
  buttons,
  close,
  input,
  listForm,
  taskForm,
} from "./DropDownForm.css";

interface IDropDownFormProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
  listId: string;
  list?: boolean;
}

const DropDownForm: FC<IDropDownFormProps> = ({
  setIsFormOpen,
  boardId,
  listId,
  list,
}) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState("");
  const formPlaceholder = list
    ? "리스트의 제목을 입력하세요"
    : "일의 제목을 입력하세요";

  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기";

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: { listId: v4(), listName: text, tasks: [] },
          })
        );

        dispatch(
          addLog({
            logId: v4(),
            logMessage: `리스트 생성하기 : ${text}`,
            logAuthor: "User",
            logTimeStamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDescription: "",
              taskOwner: "User",
            },
          })
        );

        dispatch(
          addLog({
            logId: v4(),
            logMessage: `일 생성하기 : ${text}`,
            logAuthor: "User",
            logTimeStamp: String(Date.now()),
          })
        );
      }
    }
  };

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        autoFocus
        placeholder={formPlaceholder}
        value={text}
        onChange={handleTextChange}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleSubmit}>
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  );
};

export default DropDownForm;
