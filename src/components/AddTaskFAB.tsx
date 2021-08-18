import { Fab } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import { SET_ADD_DIALOG_OPEN } from "../state/actions";
import { useDispatchContext } from "../state/context";
import { useStyles } from "../theme/styles";

const AddTaskFAB = () => {
    const dispatch = useDispatchContext()
    const onClickFAB = () => dispatch({ type: SET_ADD_DIALOG_OPEN, payload: true })

    const { fab } = useStyles()

    return (
        <Fab onClick={onClickFAB} className={fab}>
            <AddCircleRounded color="primary" aria-label="add" />
        </Fab>
    )
}

export default AddTaskFAB