import { FC, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

interface ISideFormProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SideForm: FC<ISideFormProps> = ({ setIsFormOpen, inputRef }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useTypedDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleBlur = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuidv4(),
            boardName: inputText,
            lists: [],
          },
        })
      );

      dispatch(
        addLog({
          logId: uuidv4(),
          logAuthor: "User",
          logMessage: `게시판 등록 : ${inputText}`,
          logTimeStamp: String(Date.now()),
        })
      );
    }

    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={sideForm}>
        <input
          className={input}
          type="text"
          placeholder="새 게시판 등록하기"
          value={inputText}
          autoFocus
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FiCheck className={icon} />
      </div>
    </form>
  );
};

export default SideForm;
