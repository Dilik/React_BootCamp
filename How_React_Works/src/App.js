import React, {useState, useCallback} from 'react';

import './App.css';
import DemoOutput from './components/Demo/Demo';
import Button from './components/UI/Button/Button';
function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() =>{
    if(allowToggle){
    setShowParagraph((prevParagraph) => !prevParagraph);
    }
  }, [allowToggle])
  
  const allowToggleHandler = () =>{
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle Handler</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
