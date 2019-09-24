import React from 'react';
import { Link } from "react-router-dom";

export const BlogDir: React.FC = () => (
	<div className="App">
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	</div>
);