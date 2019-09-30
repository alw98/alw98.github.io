import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week of 23 Sep - 29 Sep'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `I spent a lot of time interviewing and talking with recruiters, so I didn't
          spend as much time as I would have liked to this week working on school.
          As such, I need to catch up on a lot of my school work, but it should all 
          be manageable.`;

let q2 = `What's in my way?`;
let r2 = `Right now I have 4 projects and a test in the next week, so I have a lot of programming
          and studying in my way right now. On the bright side, none of it appears to be too difficult
          or time consuming, so I should be able to squeak by with my sanity intact.`;

let q3 = `What will I do next week?`;
let r3 = `I will spend most all of my time programming and studying. I have a WebApps project,
          Info Retrieval project, OOP project, paper and test due, so I'm going to be busy non-stop.
          I won't have any time to play games this week!`;

let q4 = `What was my experience learning about stack-allocated array, heap allocated array, and equal()?`;
let r4 = `Parts of it were definitely eye opening, and I feel like these concepts are pretty critical 
          for day to day usage in a programming profession, so I'm surprised we haven't learned about them earlier.
          I'm interested to see where this all leads us next week.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Don't be afraid to not know something at an interview! On a lot of the technical interview questions I've been asked,
          I will be able to easily come up with a naive solution, but will have a much tougher time coming up with an optimized one.
          If worst comes to worst, I'll give in and ask them what their solution is, and I'll make an effort to understand
          it. This act of actually trying to learn how to do something in the middle of an interview reflects very well on
          how you'll act if you actually get the job, showing that you're capable of quick thinking and learning new, relevant concepts!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog3: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);