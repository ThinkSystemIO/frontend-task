import DateFnsUtils from '@date-io/date-fns';
import { Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, Radio, TextField } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from 'react';
import { SET_ADD_DIALOG_OPEN } from '../state/actions';
import { useDispatchContext, useStateContext } from '../state/context';

type RadioSelection = "everyDay" | "specificDays"

interface DaysSelected {
    sun: boolean
    mon: boolean
    tue: boolean
    wed: boolean
    thu: boolean
    fri: boolean
    sat: boolean
}

interface FormState {
    inputText: string
    radioSelection: RadioSelection
    daysSelected: DaysSelected
    timeSelected: string
}

const initialState: FormState = {
    inputText: "",
    radioSelection: "everyDay",
    daysSelected: {
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
    },
    timeSelected: (() => {
        const date = new Date()
        date.setHours(0, 0, 0, 0)
        return date.toISOString()
    })()
}

const resetDayPicker = (daysSelected: DaysSelected) => {
    for (const key in daysSelected) {
        daysSelected[key as keyof DaysSelected] = false
    }
    return daysSelected
}

const AddTaskDialog = () => {
    const dispatch = useDispatchContext()
    const { addDialogOpen } = useStateContext()
    const handleClose = () => dispatch({ type: SET_ADD_DIALOG_OPEN, payload: false })

    const [formState, setFormState] = useState(initialState)
    const handleInputTextChange = (inputText: string) =>
        setFormState(state => ({ ...state, inputText }))
    const handleRadioSelectionChange = (radioSelection: RadioSelection) =>
        setFormState(state => ({ ...state, radioSelection, daysSelected: resetDayPicker(state.daysSelected) }))
    const handleDayPressed = (daySelected: keyof DaysSelected) =>
        setFormState(state => ({
            ...state,
            daysSelected: { ...state.daysSelected, [daySelected]: !(state.daysSelected[daySelected]) }
        }))
    const handleTimeSelectedChange = (timeSelected: string) =>
        setFormState(state => ({ ...state, timeSelected }))

    return (
        <div>
            <Dialog open={addDialogOpen} onClose={handleClose} aria-labelledby="add-task-dialog-title">
                <DialogTitle id="add-task-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the task description. The task will repeat every day or on specific days depending on the
                        selection below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="add-task-description"
                        label="Description"
                        type="text"
                        margin="dense"
                        fullWidth
                        onChange={e => handleInputTextChange(e.target.value)}
                    />
                    <Box my={3}>
                        <Grid container>
                            <Grid item xs={12} md={7}>
                                <FormControlLabel
                                    checked={formState.radioSelection === "everyDay"}
                                    value="everyDay"
                                    control={<Radio color="primary" />}
                                    label="Every Day"
                                    labelPlacement="top"
                                    onChange={e => handleRadioSelectionChange("everyDay")}
                                />
                                <FormControlLabel
                                    checked={formState.radioSelection === "specificDays"}
                                    value="specificDays"
                                    control={<Radio color="primary" />}
                                    label="Specific Days"
                                    labelPlacement="top"
                                    onChange={e => handleRadioSelectionChange("specificDays")}
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        fullWidth
                                        id="time-picker"
                                        label="Time picker"
                                        value={new Date(formState.timeSelected)}
                                        onChange={(date, _) => handleTimeSelectedChange(date?.toISOString() || "")}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                    </Box>
                    {formState.radioSelection === "specificDays" &&
                        <Grid container justify="center">
                            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                <Button
                                    color={formState.daysSelected.sun ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("sun")}>
                                    S
                                </Button>
                                <Button
                                    color={formState.daysSelected.mon ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("mon")}>
                                    M
                                </Button>
                                <Button
                                    color={formState.daysSelected.tue ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("tue")}>
                                    T
                                </Button>
                                <Button
                                    color={formState.daysSelected.wed ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("wed")}>
                                    W
                                </Button>
                                <Button
                                    color={formState.daysSelected.thu ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("thu")}>
                                    T
                                </Button>
                                <Button
                                    color={formState.daysSelected.fri ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("fri")}>
                                    F
                                </Button>
                                <Button
                                    color={formState.daysSelected.sat ? "primary" : "secondary"}
                                    onClick={() => handleDayPressed("sat")}>
                                    S
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Add
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}



export default AddTaskDialog