import { State, Task } from "./model"

export type Action =
    { type: typeof SET_ADD_DIALOG_OPEN, payload: boolean } |
    { type: typeof SET_EDIT_DIALOG_TASK, payload: Task | null } |
    { type: typeof ADD_TASK, payload: Task } |
    { type: typeof EDIT_TASK, payload: Task } |
    { type: typeof REMOVE_TASK, payload: Task }

export const SET_ADD_DIALOG_OPEN = "SET_ADD_DIALOG_OPEN"
export const SET_EDIT_DIALOG_TASK = "SET_EDIT_DIALOG_TASK"
export const ADD_TASK = "ADD_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const REMOVE_TASK = "REMOVE_TASK"

export const setAddDialogOpen = (state: State, addDialogOpen: boolean) =>
    ({ ...state, addDialogOpen })
export const setEditDialogTask = (state: State, editDialogTask: Task | null) =>
    ({ ...state, editDialogTask })
export const addTask = (state: State, task: Task) =>
    ({ ...state, tasks: [...state.tasks, task] })
export const editTask = (state: State, task: Task) =>
    ({ ...state, tasks: state.tasks.map(current => current.id === task.id ? task : current) })
export const removeTask = (state: State, task: Task) =>
    ({ ...state, tasks: state.tasks.filter(current => current.id !== task.id) })
