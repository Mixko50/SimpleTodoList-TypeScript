import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useRef,
    useContext,
} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TagSelect } from "./TagSelect";
import { Todo } from "../interfaces/List";
import { ProfileContext } from "../contexts/TodoContext";
import { GetTag } from "../interfaces/GetTag";

export const AddTodoDialog = forwardRef((props, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const tagRef = useRef<GetTag>(null);
    const { todoList, setTodoList } = useContext(ProfileContext);
    console.log(todoList);

    const [add, setAdd] = useState<Todo>({
        title: "",
        date: "",
        tag: "",
        id: 0,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            handleClickOpen();
        },
    }));

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add To Do List</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add To do list here by input your title, date, tag
                    </DialogContentText>
                    <TextField
                        id="name"
                        label="Title"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setAdd({ ...add, title: e.target.value });
                        }}
                    />
                    <TextField
                        margin="normal"
                        id="name"
                        label="Date"
                        fullWidth
                        variant="standard"
                        placeholder="11/09/2021"
                        onChange={(e) => {
                            setAdd({ ...add, date: e.target.value });
                        }}
                    />
                    <TagSelect ref={tagRef} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={() => {
                            setTodoList([
                                ...todoList,
                                {
                                    ...add,
                                    tag: tagRef.current?.sendTag() || "",
                                },
                            ]);
                            handleClose();
                        }}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});
