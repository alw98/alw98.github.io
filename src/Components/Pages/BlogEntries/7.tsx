import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week 7'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `This last week was spent working on projects and  tests, along with getting used to the cold! I really hate winter, I live in Texas so that I can stay warm year round! I also spent
            a few hours creating a Twitch bot, and learning how to use the Google speech api to convert text to speech. I used it to basically make my own personal assistant for my computer,
            and used the iTunes COM interface to control my music with it.`;

let q2 = `What's in my way?`;
let r2 = `I have 2 projects coming up next week, along with winter, a job application, and a fundraiser for TXTS.`;

let q3 = `What will I do next week?`;
let r3 = `Next week I plan on finishing up Darwin early, then getting my other project knocked out so that I'm not flooded all week long. I don't have any tests so I should be able to make everything go smoothly.`;

let q4 = `What was your experience of the vector implementation?`;
let r4 = `It's very interesting seeing the mechanics of how vector works under the hood. I've used them before in the few times I've done Cpp programing, but learning what makes them tick and how to be
            efficient when using them is very important. Also, I didn't even know about the initialization list or copy constructors, or allocation works! It's very eye opening.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `If you plan on developing on and for Windows, learn about the COM system. It is a powerful and easy to use way of communicating between programs on Windows, and essentially allows you to
            interface with other programs like they're an imported module, depending on what functionality they export. It's a really neat system, that has the potential to be very powerful.`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog7: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);