import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week X'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = ``;

let q2 = `What's in my way?`;
let r2 = ``;

let q3 = `What will I do next week?`;
let r3 = ``;

let q4 = `CHANGES EVERY WEEK`;
let r4 = ``;

let q5 = `What's my pick/tip of the week?`;
let r5 = ``;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});

export const BlogX: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);