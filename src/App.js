import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Prifile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className="app-container">
          <div className='app-body'>
            <Header />
            <Navbar state={props.state.navbarPage} />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/ptofile/*' element={<Profile state={props.state.profilePage} />} />
                <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
                <Route path='/news/*' element={<News />} />
                <Route path='/music/*' element={<Music />} />
                <Route path='/settings/*' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};





export default App;


