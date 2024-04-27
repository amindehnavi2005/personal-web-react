import { useState } from 'react';
import './App.css';
import AnimCursor from './components/AnimCursor';
import MainBox from './screens/MainBox';
import Sidebar from './screens/Sidebar';

function App() {
  const [mainScreen, changeMainScreen] = useState("Start");
  return (
    <div className="app" >
      <AnimCursor />
      <Sidebar changeScreen={clickedNewScreen} />
      <MainBox mainBoxName={mainScreen} />
    </div>
  );

  function clickedNewScreen(event) {
    changeMainScreen(event.target.innerHTML);
    console.log(mainScreen);
  }
}

export default App;
