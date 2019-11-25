import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';
import {Automata} from '../Automata';

let title = 'CS371p Fall 2019: Week 10'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `This past week was spent getting ready for Thanksgiving Break by finishing up projects, including Life. I didn't have much
trouble with life, and I finished it in a couple of hours, so now I just have to do all the annoying final parts, like the UML diagram, issues and such.`;

let q2 = `What's in my way?`;
let r2 = `I don't have much else in my way, until the week after Thanksgiving. Things are going to get crazy hectic when that comes around!`;

let q3 = `What will I do next week?`;
let r3 = `Next week I'm going to a bachellor party on Tuesday and Wednesday, which will be great. I also plan on spending a lot of time with my family, since I don't get
to spend a lot with them during the semester.`;

let q4 = `What was your experience of method overriding, pure virtual methods, and clone()?`;
let r4 = `The lectures were all pretty straight forward, and I had already worked with pure virtual methods with Life, so everything made sense. I like how much control C++ gives
the programmer over inheritance, but sometimes it get's in the way of my preferred way of programming, which is quickly throwing something together.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Look into prototyping in different languages. Even if a project requires the final product to be in a specific language, like C++, it can be a pain to start in C++.
Sometimes I find it easier to come up with a working, dirty solution in a language like JavaScript. Doing this allows you to quickly try out new ideas, because of how quick and
easy it is to write JS, and how quickly you can get prototypes up. Doing this allows you to get a nice foundation on the problem, and to optimize out issues for production before they're
even really a problem. Doing this simple iterative process can greatly increase your productivity on some projects.`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});  
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog10: React.FC = () => (
    <div>
        <BlogEntry qas={qas} title={title}/>
    </div>
);