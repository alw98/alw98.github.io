import React from 'react';
import Sketch from 'react-p5';
import * as ColorAuto from '../../Models/ColorAuto'; 
import '../../stylesheets/Automaton.css';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export class Automata extends React.Component<{}, {}>{

  targetElement;

  render(){
    return (
      <div id="auto-scroll-lock" className="auto-container">
        <div className="auto-inputs">
          <input type="radio" id="auto-r" name="colors" className="auto-radio" onClick={ColorAuto.colorRed} defaultChecked/>
          <label htmlFor="auto-r"/>

          <input type="radio" id="auto-g" name="colors" className="auto-radio" onClick={ColorAuto.colorGreen}/>
          <label htmlFor="auto-g"/>

          <input type="radio" id="auto-b" name="colors" className="auto-radio" onClick={ColorAuto.colorBlue}/>
          <label htmlFor="auto-b"/>
        </div>
        <Sketch className='automaton' setup={ColorAuto.setup} draw={ColorAuto.draw} windowResized={ColorAuto.windowResized} mouseDragged={ColorAuto.mouseDragged} mouseReleased={ColorAuto.mouseReleased}/>
      </div>
    );
  }

  componentDidMount() {
    this.targetElement = document.querySelector('#auto-scroll-lock');
    disableBodyScroll(this.targetElement);
  }
  
  showTargetElement = () => {
  };
  
  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }
}
