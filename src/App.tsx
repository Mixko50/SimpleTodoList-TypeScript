import "./styles/index.ts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "./contexts/ThemeSetting";
import { TodoWrapper } from "./contexts/TodoContext";

function App() {
    return (
        <TodoWrapper>
            <ThemeContextProvider>
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </ThemeContextProvider>
        </TodoWrapper>
    );
}

export default App;
