import React from 'react';
import {BlogEntry} from '../../BlogComponents/BlogEntry';
import { QAModel } from '../../../Models/QAModel';

let title = 'CS371p Fall 2019: Final Entry'
let qas: QAModel[] = [];

let q1 = `Abstract`;
let r1 = `I thought this class was very interesting. I learned a lot of OOP techniques I had never heard of or even considered before,
and learned a ton about the intricacies of C++. In all honestly, this class is more of a C++ class than anything else.`;

let q2 = `Curriculum`;
let r2 = `The class consists of weekly lectures in which students are required to participate, which in my opinion significantly
increases the amount of information retained. There are in class HackerRank projects you work on in pairs, which lets you work hands on with the
concepts gone over in class, to ensure you have a good grasp on them. The curriculum covers all of the things you need to know to be a good C++ programmer,
and teaches good programming "etiquette", like the right way to use version control and issue boards, which is very important for programmers in the workforce.`;

let q3 = `Assignments`;
let r3 = `I personally don't think the programming assignments were too hard. I heard some people had quite a bit of trouble with them, but I felt like as long
as you sat down and came up with a plan before you started programming, and didn't end up programming yourself into a corner, they weren't too bad. The tests, on the other hand,
I didn't enjoy very much. Having to work with another person during an exam just encourages cheating, and during the midterm that's all that happened everywhere, rampant cheating. Because
I didn't take part in it(I assumed it wasn't allowed, which the professor said afterwards it was fine to just copy), I ended up taking a hit to my grade. Because we only got half the time to work
on the test by ourselves, it didn't really feel fair.`;

let q4= `Conclusion`;
let r4 = `This was a good class. It covered a lot of useful material, which would be helpful to any computer scientist planning on working in the future. It teaches a lot about the intricacies
of C++, which sometimes don't have very good analogs in other languages, but are never the less helpful to be knowledgable about. I only wish I would have been able to be more involved in the class,
but this semester was pretty rough for me.`;

qas.push({question: q1, response: r1});
qas.push({question: q2, response: r2});
qas.push({question: q3, response: r3});
qas.push({question: q4, response: r4});

export const BlogFinal: React.FC = () => (
    <BlogEntry qas={qas} title={title}/>
);