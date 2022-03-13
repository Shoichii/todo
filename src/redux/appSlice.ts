
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    tasks: Array<{title: string, description: string, id: number}>;
    edit: Array<boolean>;
}

const initialState: IInitialState = {
    tasks: [],
    edit: [],
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{title: string, description: string, id?: number}>) => {
            state.tasks.push({...action.payload, id: state.tasks.length})
            state.edit.push(false)},

        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks.splice(action.payload,1);
        },

        editTaskStart: (state, action: PayloadAction<number>) => {
            state.edit.splice(action.payload,1,true);
        },

        editTaskEnd: (state, action: PayloadAction<{title: string, description: string, id: number}>) => {
            state.tasks.splice(action.payload.id,1, {title: action.payload.title, 
                description: action.payload.description, id: action.payload.id});
            state.edit.splice(action.payload.id,1,false);
            
        },
    }
})

export const {addTask, deleteTask, editTaskStart, editTaskEnd} = appSlice.actions;
