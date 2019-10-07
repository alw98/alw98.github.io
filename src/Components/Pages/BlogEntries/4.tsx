import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week of 30 Sep - 6 Oct'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `My past week was filled with tests and projects, and I still have some that I need to work on. I also got second place at OGT Austin, and I'm pretty proud of that!`;

let q2 = `What's in my way?`;
let r2 = `I still have several projects in my way next week, a test, and then an interview in California on Thursday. It's going to be a crazy hectic week!`;

let q3 = `What will I do next week?`;
let r3 = `Like I said, I've got projects, a test, an interview, and whatever misc. work I can't think of right now. Hopefully I'll be able to scrounge up some free time to hang out with friends, though!`;

let q4 = `What was your experience in learning about equal(), copy(), fill(), and the different STL containers?`;
let r4 = `It was interesting to see how these functions work, and also interesting to see how they relate to each other. This information will be critical moving forward and working with templates.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Make time for side projects during the week. For me, side projects keep programming interesting and ensure I keep learning things outside of school. They also look great to potential employers, and teach you how to learn on your own!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog4: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);