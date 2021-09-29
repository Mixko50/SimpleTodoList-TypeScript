import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/system";
import { useContext, useRef } from "react";
import { ProfileContext } from "../contexts/TodoContext";
import List from "../components/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { pink } from "@mui/material/colors";
import { AddTodoDialog } from "../components/AddTodoDialog";
import { Todo } from "../interfaces/List";

const Home = () => {
    const classes = useStyles();
    const { todoList } = useContext(ProfileContext);
    const AddTodoRef = useRef((() => {}) as any);

    return (
        <Box className={classes.mixko}>
            <Box>
                <Typography variant="h4">To Do List</Typography>
            </Box>
            <Box className={classes.buttonBox}>
                <Box
                    className={classes.button}
                    onClick={() => {
                        AddTodoRef.current.open();
                    }}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "10px" }}
                    />
                    <Typography variant="h6">Add</Typography>
                </Box>
            </Box>
            {todoList.map((todo: Todo) => {
                return (
                    <List
                        key={Math.random()}
                        title={todo.title}
                        date={todo.date}
                        tag={todo.tag}
                        id={todo.id}
                    />
                );
            })}
            <AddTodoDialog ref={AddTodoRef} />
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    mixko: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "100px",
    },
    buttonBox: {
        marginTop: "20px",
        width: "680px",
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        width: "150px",
        height: "50px",
        backgroundColor: pink[100],
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },
}));

export default Home;
