import './App.css';
import NavBar from "./Components/navbar";
import SearchPage from "./Components/SearchPage";
import ListPage from "./Pages/ListPage";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Router>
                <div className="internal-pages">
                    <Route exact path="/lists">
                        <ListPage/>
                    </Route>
                    <Route path="/search">
                        <SearchPage/>
                    </Route>
                    <Route path="/"></Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
