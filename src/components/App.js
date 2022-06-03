import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
import Person from './Forms/Person';
//import Coins from './Crypto/Coins';
//import Charthome from './Chart/Charthome';
//import Animation from './Animating/Animation';
//import Numbers from './PureComponent/Numbers';
//import Calculator from './Calculator/Calculator';
import Popup from 'react-popup';

function App() {
  return (
    <div className="App">
      <Header title="Mi App" url="http://github.com" />
      <Content>
        <Person />
      </Content>
      <Popup />
      <Footer />
    </div>
  );
}

export default App;
