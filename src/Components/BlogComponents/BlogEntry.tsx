import React from 'react';
import '../../stylesheets/Blog.css';
import { BlogQA } from './BlogQA';
import { QAModel } from '../../Models/QAModel';
import image from '../../resources/headshot.jpg';

interface Props{
    qas: QAModel[];
    title: string;
}

export class BlogEntry extends React.Component<Props, {}>{
    render(){
            return(
            <div className="blog-entry-container">
                <h1>Armond Willingham</h1>
                <h2>{this.props.title}</h2>
                <img src={image} alt="headshot" className="blog-headshot"/>
                {this.props.qas.map(qa => <BlogQA question={qa.question} response={qa.response} key={qa.question}/>)}
            </div>
        )
    }
}