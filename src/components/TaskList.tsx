import { List } from "@material-ui/core"
import { useEffect } from "react"
import { ADD_TASK } from "../state/actions"
import { useDispatchContext, useStateContext } from "../state/context"
import { generateTasks } from "../state/generate"
import TaskItem from "./TaskItem"

const TaskList = () => {
    const dispatch = useDispatchContext()
    const { tasks } = useStateContext()

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            const tasks = generateTasks(10)
            for (let task of tasks) { dispatch({ type: ADD_TASK, payload: task }) }
        }
    }, [dispatch])

    return (
        <List >
            {tasks.map(task =>
                <TaskItem key={task.id} task={task} />
            )}
        </List>
    )
}

export default TaskList