import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week 5'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `I had a crazy amount of tests last week. I was busy studying all week long, and taking tests in my free time. It was horrible.`;

let q2 = `What's in my way?`;
let r2 = `I have a few projects in my way, and more tests in the coming week. It's going to be busy.`;

let q3 = `What will I do next week?`;
let r3 = `Next week I plan to study in most of my free time, and maybe get some work done on my website, adding in some WebGL stuff or maybe even OpenGL with WASM.`;

let q4 = `What was your experience of the peer-instruction exam?`;
let r4 = `I thought it was god-awful. I wish I could've jsut spent the entire hour and a half working consistently on my own. Instead, half way through the test, right when I was getting into
         the hard stuff, I had to start over. Everyone around me was just cheating, copying verbatim what other people had done. I didn't do it because it's wrong and against the code of conduct,
         but I guess I should have just cheated along with everyone else to ensure I got a good grade. I really, really hated the format.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Prioritize your  time. Sometimes you just don't have enough time to spend on everything you need to for school, so you have to pick your battles and work on the things that are most pressing.`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog5: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);