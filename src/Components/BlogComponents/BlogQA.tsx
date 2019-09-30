import React from 'react';
import '../../stylesheets/Blog.css';
import {QAModel} from '../../Models/QAModel';

export class BlogQA extends React.Component<QAModel, {}>{
    render(){
        return(
            <div className="blog-qa-section">
                <h3 className="blog-question">
                    {this.props.question}
                </h3>
                <div className="blog-response">
                    {this.props.response}
                </div>
            </div>
        )
    };
};