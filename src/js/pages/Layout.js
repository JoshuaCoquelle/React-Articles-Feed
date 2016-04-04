import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

/**
 * Main page Layout class component
 */
class Layout extends React.Component
{
    /**
     * @return {JSX Markup}
     */
    render () {
        return (
            <div>
                <Nav />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>KillerNews.net</h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout