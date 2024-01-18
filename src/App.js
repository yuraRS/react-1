import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Prifile/Profile';




const App = () => {
  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <Header />
        <Navbar /> 
        <Profile />
      </div>
    </div>
  );
};





export default App;


