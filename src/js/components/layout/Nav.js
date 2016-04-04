import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component 
{
	render () {
		return (
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span> 
						</button>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav">
							<li><IndexLink to="/">Featured</IndexLink></li>
							<li><Link to="archives">Archives</Link></li>
							<li><Link to="settings">Settings</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}