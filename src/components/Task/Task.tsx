import { FC } from "react";
import { container, description, title } from "./Task.css";
import { Draggable } from "@hello-pangea/dnd";

interface ITaskProps {
  index: number;
  boardId: string;
  id: string;
  taskName: string;
  taskDescription: string;
}

const Task: FC<ITaskProps> = ({ index, id, taskName, taskDescription }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={container}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
