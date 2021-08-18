import { Action, addTask, ADD_TASK, editTask, EDIT_TASK, removeTask, REMOVE_TASK, setAddDialogOpen, setEditDialogTask, SET_ADD_DIALOG_OPEN, SET_EDIT_DIALOG_TASK } from "./actions"
import { State } from "./model"

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case SET_ADD_DIALOG_OPEN:
            return setAddDialogOpen(state, action.payload)
        case SET_EDIT_DIALOG_TASK:
            return setEditDialogTask(state, action.payload)

        case ADD_TASK:
            return addTask(state, action.payload)
        case EDIT_TASK:
            return editTask(state, action.payload)
        case REMOVE_TASK:
            return removeTask(state, action.payload)

        default:
            throw new Error("not implemented")
    }
}