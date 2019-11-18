import React from 'react';
import { Link } from "react-router-dom";

export const BlogDir: React.FC = () => (
	<div className="App">
		<Link to="/blog/2">Blog post 2</Link>
		<br/>
		<Link to="/blog/3">Blog post 3</Link>
		<br/>
		<Link to="/blog/4">Blog post 4</Link>
		<br/>
		<Link to="/blog/5">Blog post 5</Link>
		<br/>
		<Link to="/blog/6">Blog post 6</Link>
		<br/>
		<Link to="/blog/7">Blog post 7</Link>
		<br/>
		<Link to="/blog/8">Blog post 8</Link>
		<br/>
		<Link to="/blog/9">Blog post 9</Link>
	</div>
);