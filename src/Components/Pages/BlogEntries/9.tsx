import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';
import {Automata} from '../Automata';

let title = 'CS371p Fall 2019: Week 9'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `This last week was spent working on projects and  tests! I started to look over Life, and it doesn't look too bad. I already made something similar, which you can see at the bottom of the page.
It's a rock/paper/scissors game of life type thing, where red beats blue,
blue beats green and green beats red. If you get it just right, it turns into a kind of perpetual motion machine, where each color is feeding of each other in beautiful spiral patterns.`;

let q2 = `What's in my way?`;
let r2 = `I need to get through all of my projects next week, because I won't be able to work on them at the beginning of Thanksgiving break. It's going to be very hectic.`;

let q3 = `What will I do next week?`;
let r3 = `Next week I plan on working on projects pretty much non-stop, and just trying to get through unscathed. I really need to get on top of everything so I can pass all my classes,
and still be able to make it to my friends bachellor party!`;

let q4 = `What was your experience of inheritance?`;
let r4 = `It's interesting to see how it compares to Java's usage of inheritance. It doesn't seem too complicated right now, so I'm not too worried about using it in Life.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Find time to take a breather during Thanksgiving break. The stress of the semester builds up, and Thanksgiving break is the first honest to goodness break from school for the semester.
It can be really draining to always worry about school, so taking a few days off during the break can leave you feeling better than ever when you get back to school!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog9: React.FC = () => (
    <div>
        <BlogEntry qas={qas} title={title}/>
        <Automata scroll={true}/>
    </div>
);