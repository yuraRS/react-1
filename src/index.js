import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/obnusenie.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 1, message: 'Hello world', likeCounter: 10},
  {id: 2, message: 'My name is Yura', likeCounter: 2},
];

let dialods = [
  {id: 1, name: 'Yura'},
  {id: 2, name: 'Ira'},
  {id: 3, name: 'Ola'},
  {id: 4, name: 'Dasha'},
  {id: 5, name: 'Kata'},
  {id: 6, name: 'Valera'},
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is you'},
  {id: 3, message: 'Yo'},
];

let friends = [
  {id: 1, name: 'Yura', url: 'https://mighty.tools/mockmind-api/content/human/72.jpg'},
  {id: 2, name: 'Ira', url: 'https://mighty.tools/mockmind-api/content/human/78.jpg'},
  {id: 3, name: 'Ola', url: 'https://mighty.tools/mockmind-api/content/human/55.jpg'},
];




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post={posts} dialog={dialods} message={messages} friend={friends} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



