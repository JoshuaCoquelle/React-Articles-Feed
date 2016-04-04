import React from "react";
import Article from "../components/Article";

/**
 * Archived articles class component
 */
class Archives extends React.Component
{
    /**
     * @return {JSX Markup}
     */
    render () {
        let { params } = this.props;

        let Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Even More Articles"
        ].map((title, index) => <Article key={index} title={title} />);

        return (
            <div>
                <h1>Archives ({params.article})</h1>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}

export default Archives