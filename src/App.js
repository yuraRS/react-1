import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Sitebar from './components/Navbar/Sitebar';
import {Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Prifile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = (props) => {
  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <HeaderContainer />
        <div className='app-body'>
          <Sitebar state={props.state.sitebarPage} />
          <div className='app-content'>
            <Routes>
              <Route path='/profile/:userId?/*' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};





export default App;




