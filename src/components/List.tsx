import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { green, pink, purple, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/system";
import { useContext } from "react";
import { ProfileContext } from "../contexts/TodoContext";

type ListProps = {
    title: string;
    id: number;
    date: string;
    tag: string;
};

const List: React.FC<ListProps> = ({ id, title, date, tag }) => {
    const classes = useStyles();
    const { todoList, setTodoList } = useContext(ProfileContext);

    const checkColor = (tag: string) => {
        if (tag === "blue") {
            return purple[100];
        } else if (tag === "green") {
            return green[100];
        } else if (tag === "pink") {
            return pink[100];
        } else if (tag === "purple") {
            return purple[100];
        } else {
            return red[100];
        }
    };

    const deleteTodo = (id: number) => {
        setTodoList(
            todoList.filter((e) => {
                return e.id != id;
            })
        );
    };

    return (
        <Box className={classes.section}>
            <Box
                className={classes.pic}
                style={{ backgroundColor: checkColor(tag) }}
            ></Box>
            <Box className={classes.title}>
                <Typography variant="h6">{title}</Typography>
            </Box>
            <Box className={classes.date}>
                <Typography variant="subtitle1">{date}</Typography>
            </Box>
            <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                style={{ cursor: "pointer", width: "30px" }}
                onClick={() => {
                    deleteTodo(id);
                }}
            />
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        width: "600px",
        height: "120px",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px rgb(212, 206, 206)",
        marginTop: "30px",
        padding: "10px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pic: {
        borderRadius: "100px",
        width: "90px",
        height: "90px",
    },
    title: {
        width: "200px",
        height: "100%",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    date: {
        width: "100px",
    },
}));

export default List;
