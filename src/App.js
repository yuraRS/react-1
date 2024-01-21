import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Prifile/Profile';
import Dialogs from './components/Dialogs/Dialogs';




const App = () => {
  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <Header />
        <Navbar /> 
        <div className='app-wrapper-content'>
            {/* <Profile /> */}
            <Profile />
            {/* <Dialogs /> */}
        </div>
      </div>
    </div>
  );
};





export default App;


