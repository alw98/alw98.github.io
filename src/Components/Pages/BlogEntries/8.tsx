import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';
import {Automata} from '../Automata';

let title = 'CS371p Fall 2019: Week 8'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `This last week was spent working on projects and  tests, along with getting used to the cold! I managed to get through Darwin without much trouble, and also made 
a personal game of life side project. You can try it out by clicking "Automata" at the top of the screen, or by going to the bottom of the page! It's a rock/paper/scissors game of life type thing, where red beats blue,
blue beats green and green beats red. If you get it just right, it turns into a kind of perpetual motion machine, where each color is feeding of each other in beautiful spiral patterns. The one on this
page doesn't work too well because of scrolling on mobile, but the dedicated one works great!`;

let q2 = `What's in my way?`;
let r2 = `I need to get through all of my projects next week, because I won't be able to work on them at the beginning of Thanksgiving break.`;

let q3 = `What will I do next week?`;
let r3 = `Next week I plan on working on projects pretty much non-stop, and just trying to get through unscathed.`;

let q4 = `What was your experience of move semantics and allocators in the context of the vector implementation?`;
let r4 = `I thought it was interesting seeing how you can specifically differentiate and overload functions based on if parameters are l-value refs, const l-value refs or r-values. 
I'm not sure how useful it would be in day to day programming, but I could see it being very useful for designing classes which require efficient creation and copying, which utilize large amounts
of memory, so there isn't any need for reallocation.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `If you enjoy working with graphics, checkout p5.js(or WebGL if you're feeling adventurous). They can allow you to make beautiful visualizations, quickly. They can also be invaluable
for making parralelizable algorithms run efficiently, by using compute shaders. There are some things that GPU's are just better suited for, and being able to utilize them in the browser is a pretty
invaluable skill. I used p5.js to make my rock/paper/scissors automaton below, and it's not incredibly fast because p5.js isn't smart enough to batch the draw calls into one, so I'm working
on porting it to WebGL!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog8: React.FC = () => (
    <div>
        <BlogEntry qas={qas} title={title}/>
        <Automata scroll={true}/>
    </div>
);