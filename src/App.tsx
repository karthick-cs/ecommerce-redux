import React from 'react';
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import {Provider} from "react-redux";
import {SnackbarProvider} from 'notistack'
import {store} from "./store";
import routes from "./routes";
import './App.css';

function RenderRoutes() {
    return useRoutes(routes);
}

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider>
                <Router>
                    <RenderRoutes/>
                </Router>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
