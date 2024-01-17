import './scss/App.scss';
import logo from './logo.svg';
import Header from './components/Header';
import Sitebar from './components/Sitebar';
import Content from './components/Content';








const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='page'>
        <div className="page__container">
          <Sitebar /> 
          <Content />
        </div>
      </main>
    </div>
  );
};







export default App;


