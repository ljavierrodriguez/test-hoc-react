import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/inicio" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;