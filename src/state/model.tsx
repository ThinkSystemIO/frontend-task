export interface State {
    tasks: Task[]
    addDialogOpen: boolean
    editDialogTask: Task | null
}

export interface Task {
    id: string
    data: string
}

export const initialState: State = {
    tasks: [],
    addDialogOpen: false,
    editDialogTask: null,
}