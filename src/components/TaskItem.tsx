import { Box, Divider, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core"
import { Delete, EditRounded } from "@material-ui/icons"
import { REMOVE_TASK, SET_EDIT_DIALOG_TASK } from "../state/actions"
import { useDispatchContext } from "../state/context"
import { Task } from "../state/model"

interface Props {
    task: Task
}

const TaskItem = ({ task }: Props) => {
    const dispatch = useDispatchContext()
    const onClickEdit = () => dispatch({ type: SET_EDIT_DIALOG_TASK, payload: task })
    const onClickRemove = () => dispatch({ type: REMOVE_TASK, payload: task })

    return (
        <Box marginBottom={4}>
            <Paper elevation={3}>
                <Box px={2} pt={2}>
                    <ListItem key={task.id}>
                        <Grid container>
                            <Grid container item xs={12} sm={10}>
                                <ListItemText>
                                    {task.data}
                                </ListItemText>
                            </Grid>
                            <Box mt={3} style={{ width: "100%" }}>
                                <Divider />
                            </Box>
                            <Grid container item xs={12} sm={2} justify="space-around">
                                <ListItemIcon>
                                    <IconButton onClick={onClickEdit}>
                                        <EditRounded color="primary" fontSize="large" />
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <IconButton onClick={onClickRemove}>
                                        <Delete color="primary" fontSize="large" />
                                    </IconButton>
                                </ListItemIcon>
                            </Grid>
                        </Grid>
                    </ListItem>
                </Box >
            </Paper>
        </Box >
    )
}

export default TaskItem