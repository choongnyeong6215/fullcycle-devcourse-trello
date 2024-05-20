import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

interface IBoardState {
  modalActive: boolean;
  boardArray: IBoard[];
}

interface IAddBoardAction {
  board: IBoard;
}

interface IDeleteListAction {
  boardId: string;
  listId: string;
}

interface IAddListAction {
  boardId: string;
  list: IList;
}

interface IAddTaskAction {
  boardId: string;
  listId: string;
  task: ITask;
}

interface IDeleteTaskAction {
  boardId: string;
  listId: string;
  taskId: string;
}

interface IDeleteBoardAction {
  boardId: string;
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
          listName: "list 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task 1",
              taskDescription: "task 1",
              taskOwner: "leeee",
            },
            {
              taskId: "task-1",
              taskName: "task 2",
              taskDescription: "task 2",
              taskOwner: "leeee",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list 2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "task 3",
              taskDescription: "task 3",
              taskOwner: "leeee",
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
  reducers: {
    addBoard: (state, { payload }: PayloadAction<IAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },
    deleteBoard: (state, { payload }: PayloadAction<IDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(
        (board) => board.boardId !== payload.boardId
      );
    },
    addList: (state, { payload }: PayloadAction<IAddListAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? { ...board, lists: board.lists.push(payload.list) }
          : board
      );
    },
    addTask: (state, { payload }: PayloadAction<IAddTaskAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.push(payload.task),
                    }
                  : list
              ),
            }
          : board
      );
    },
    updateTask: (state, { payload }: PayloadAction<IAddTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.map((task) =>
                        task.taskId === payload.task.taskId
                          ? payload.task
                          : task
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },
    deleteTask: (state, { payload }: PayloadAction<IDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        (task) => task.taskId !== payload.taskId
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },
    deleteList: (state, { payload }: PayloadAction<IDeleteListAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(
                (list) => list.listId !== payload.listId
              ),
            }
          : board
      );
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
  },
});

export const {
  addBoard,
  deleteBoard,
  addList,
  addTask,
  updateTask,
  deleteTask,
  deleteList,
  setModalActive,
} = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;
