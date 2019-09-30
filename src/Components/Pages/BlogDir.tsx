import React from 'react';
import { Link } from "react-router-dom";

export const BlogDir: React.FC = () => (
	<div className="App">
		<Link to="/blog/2">Blog post 2</Link>
		<br/>
		<Link to="/blog/3">Blog post 3</Link>
	</div>
);