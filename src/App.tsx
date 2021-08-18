import { Box, ThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from 'react';
import './App.css';
import AddTaskDialog from './components/AddTaskDialog';
import AddTaskFAB from './components/AddTaskFAB';
import EditTaskDialog from './components/EditTaskDialog';
import TaskList from './components/TaskList';
import { StateProvider, useStateContext } from './state/context';
import { darkTheme, lightTheme } from './theme/theme';

const DARK_THEME = "dark"
const LIGHT_THEME = "light"

const App = () => {
    const [themeMode, setThemeMode] = useState(DARK_THEME)
    const toggleTheme = () => setThemeMode(state => state === DARK_THEME ? LIGHT_THEME : DARK_THEME)
    const theme = themeMode === DARK_THEME ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StateProvider>
                <Container />
            </StateProvider>
        </ThemeProvider>
    );
}

const Container = () => {
    const { editDialogTask } = useStateContext()
    return (
        <Box p={2} pb={8}>
            <TaskList />
            <AddTaskFAB />
            <AddTaskDialog />
            {editDialogTask && <EditTaskDialog />}
        </Box>
    )
}


export default App;
