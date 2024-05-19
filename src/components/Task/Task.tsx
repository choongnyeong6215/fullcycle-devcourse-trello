import { FC } from "react";
import { container, description, title } from "./Task.css";

interface ITaskProps {
  index: number;
  boardId: string;
  id: string;
  taskName: string;
  taskDescription: string;
}

const Task: FC<ITaskProps> = ({
  index,
  boardId,
  id,
  taskName,
  taskDescription,
}) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default Task;
