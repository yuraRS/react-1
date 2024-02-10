import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/obnusenie.css';
import App from './App';
import { addMessage, addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';




export let renderEtireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} addMessage={addMessage} />
            </React.StrictMode>
        </BrowserRouter>
    );
};