import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

interface IBoardState {
  modalActive: boolean;
  boardArray: IBoard[];
}

const initialState: IBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description1",
              taskOwner: "Leeee",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description2",
              taskOwner: "Leeee",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "Task 3",
              taskDescription: "Description3",
              taskOwner: "kwak",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
