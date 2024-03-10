import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Sitebar from './components/Navbar/Sitebar';
import {Route, Routes } from 'react-router-dom';
import Profile from './components/Prifile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <div className='app-body'>
          <Header />
          <Sitebar state={props.state.sitebarPage} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/ptofile/*' element={<Profile store={props.store} />} />
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};





export default App;


