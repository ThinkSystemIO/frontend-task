import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { EDIT_TASK, SET_EDIT_DIALOG_TASK } from '../state/actions';
import { useDispatchContext, useStateContext } from '../state/context';

const EditTaskDialog = () => {
    const dispatch = useDispatchContext()
    const { editDialogTask } = useStateContext()
    const [input, setInput] = useState(editDialogTask?.data || "")

    if (!editDialogTask) return null

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setInput(e.target.value)

    const handleSave = () => {
        dispatch({ type: EDIT_TASK, payload: { ...editDialogTask, data: input } })
        dispatch({ type: SET_EDIT_DIALOG_TASK, payload: null })
    }

    const handleClose = () => dispatch({ type: SET_EDIT_DIALOG_TASK, payload: null })


    return (
        <div>
            <Dialog
                open={editDialogTask !== null}
                onClose={handleClose}
                aria-labelledby="edit-task-dialog-title"
                fullWidth
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        id="edit-task-item"
                        type="text"
                        defaultValue={input}
                        value={input}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        multiline
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditTaskDialog