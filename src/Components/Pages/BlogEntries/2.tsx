import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Week 2'
let qas: QAModel[] = [];

let q1 = `What did I do this past week?`;
let r1 = `Last week I began working on the Collatz project. Thankfully over the summer I had a lot of hands
          on experience with Git and CI, so I understand how most of it works, 
          which made the project setup a breeze! Other than that I didn't do much 
          besides play video games and go to classes, since the semester hasn't really picked up yet. 
          I'm sure in the coming weeks I will be a lot busier!`;

let q2 = `What's in my way?`;
let r2 = `Right now the only thing in my way is creating all of the acceptance tests for the Collatz project.
          I believe the spec calls for 200 acceptance tests, which isn't trivial, and I'm not sure how to make them 
          without knowing cycle lengths before hand. It's definitely something I will be thinking about for the next
          couple of days!`;

let q3 = `What will I do next week?`;
let r3 = `Next week I plan to finish Collatz, change this blog to be React with TypeScript, and go win OGT San Antonio 
          for the club I am a part of, TXTS! It's going to be a packed week, especially since my other CS projects are beginning to be assigned.`;

let q4 = `What was my experience in learning about assertions and going over the Collatz project?`;
let r4 = `I've had quite a bit of usage with assertions in program testing throughout college and work, but it was
          interesting to see the logic behind the correct usage of them. I plan to use them more often for sanity	
          checking in my own code, the professor gave a really great tip about not using assertions when dealing 
          with user input. I had never thought about the implications, but it's clear as day now.`;

let q5 = `What's my tip of the week?`;
let r5 = `Learn how to use Git!!! Don't just work off of master, commiting whenever you're done for the day.  
		  Instead, make use of CI and any time you want to test incremental changes, commit! More important than 
		  commiting often, however, is to commit onto dedicated branches. If you have a new issue you've began work 
		  on, create a new branch for it and keep your work related to that issue solely on that branch, until 
		  you're ready to merge into master! This makes for easy debugging to figure out where something went 
		  wrong allows, you to quickly iterate, and prepares you for working in the real world!`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});
qas.push({question: q5, response: r5});
export const Blog2: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);