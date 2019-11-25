import React from 'react';
import Sketch from 'react-p5';
import * as ColorAuto from '../../Models/ColorAuto'; 
import '../../stylesheets/Automaton.css';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

interface Props{
  scroll: boolean;
}

export class Automata extends React.Component<Props, {}>{
  static defaultProps = {
    scroll: false
  }

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
  // <canvas className='automaton automaton-canvas'/>
  // <Sketch className='automaton' setup={ColorAuto.setup} draw={ColorAuto.draw} windowResized={ColorAuto.windowResized} mouseDragged={ColorAuto.mouseDragged} mouseReleased={ColorAuto.mouseReleased}/>

  componentDidMount() {
    //ColorAuto.create(document.querySelector('.automaton'));
    if(!this.props.scroll){
      disableBodyScroll('#auto-scroll-lock');
    }
  }
  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }
}
