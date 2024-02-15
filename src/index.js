import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/obnusenie.css';
import App from './App';
import state, { addMessage, addPost, subscrite, updateNewMessageText, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEtireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewMessageText={updateNewMessageText} addMessage={addMessage} updateNewPostText={updateNewPostText} />
            </React.StrictMode>
        </BrowserRouter>
    );
};



renderEtireTree(state);
subscrite(renderEtireTree);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



