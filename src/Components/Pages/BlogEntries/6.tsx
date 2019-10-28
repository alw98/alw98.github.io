import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week 6'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `Studied for tests, finished Allocator, and just tried to make it through the week. I also spent some time with my parents this weekend, because they came down to visit.`;

let q2 = `What's in my way?`;
let r2 = `At this point, not too much.`;

let q3 = `What will I do next week?`;
let r3 = `Register for classes, drop my history class because I just can't bring myself to care about it enough to do well, and I'm going to try and fix my sleep schedule.`;

let q4 = `What was your experience of the allocator project?`;
let r4 = `I enjoyed it. It was easier than I expected it to be, but I had a few issues getting it set up correctly. Honestly, getting my environment set up probably took the longest.`;

let q5 = `What's my pick/tip of the week?`;
let r5 = `Try out the game Descenders! It's a fun indie mountain biking game, with procedurally generated maps. They also have a robust modding system, which I've had a ton of fun playing around with. I don't really do much 3D modelling any more, but Descenders has gotten me back into the habit!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const Blog6: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);