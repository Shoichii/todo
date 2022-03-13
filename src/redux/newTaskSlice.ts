import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  textTitleValue: string;
  textDescriptionValue: string;
  isError: boolean;
  isEditError: boolean;
  editTitle: string;
  editDescription: string;
}

const initialState: IInitialState = {
  textTitleValue: '',
  textDescriptionValue: '',
  isError: false,
  isEditError: false,
  editTitle: '',
  editDescription: '',
}

export const newTaskSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
      changeTitle: (state, action: PayloadAction<string>) => {state.textTitleValue = action.payload},
      changeDescription: (state, action: PayloadAction<string>) => {state.textDescriptionValue = action.payload},
      isErrorChange: (state, action: PayloadAction<[boolean, string]>) => {
        switch(action.payload[1]) {
          case "newTask" : state.isError = action.payload[0];
          break;
          case "editTask" : state.isEditError = action.payload[0];
          break;
        }
      },
      changeEditTitle: (state, action: PayloadAction<string>) => {state.editTitle = action.payload},
      changeEditDescription: (state, action: PayloadAction<string>) => {state.editDescription = action.payload},
    },
  })

  export const {changeTitle,  changeDescription, isErrorChange,
                changeEditTitle, changeEditDescription} = newTaskSlice.actions;


