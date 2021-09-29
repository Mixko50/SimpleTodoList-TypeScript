import { createContext, useState } from "react";
import { Todo } from "../interfaces/List";

export const ProfileContext = createContext({
    todoList: [] as Todo[],
    setTodoList: (() => {}) as any,
});

export const TodoWrapper: React.FC = ({ children }) => {
    const [todoList, setTodoList] = useState<Todo[]>([
        {
            id: 1,
            title: "Go to AKA",
            date: "09/10/2021",
            tag: "blue",
        },
        {
            id: 2,
            title: "GEN352 A6, E1",
            date: "12/10/2021",
            tag: "red",
        },
        {
            id: 3,
            title: "Go to Suki Tee Noi",
            date: "16/10/2021",
            tag: "pink",
        },
    ]);

    return (
        <ProfileContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </ProfileContext.Provider>
    );
};
