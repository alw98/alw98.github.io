import React from 'react';
import Sketch from 'react-p5';

export class Automata extends React.Component<{}, {}>{
  x = 50;
  y = 50;

  render(){
    return (
      <Sketch setup={this.setup} draw={this.draw}/>
    );
  }

  setup = (p5: any, parent: any) => {
    p5.createCanvas(500, 500).parent(parent);
    console.log(parent);
  }

  draw = (p5: any) => {
    p5.background(0);
    p5.ellipse(this.x, this.y, 70, 70);
    this.x++;
  }
}
