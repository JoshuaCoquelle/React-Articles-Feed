import React from "react";
import Article from "../components/Article";

/**
 * Featured (Article) class component
 */
class Featured extends React.Component 
{
    render () {
        let Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Even More Articles"
        ].map((title, index) => <Article key={index} title={title} />);

        return (
            <div>
                <div class="row">
                    <div class="col-lg-12"></div>
                </div>

                <div class="row">{Articles}</div>
            </div>
        );
    }
}

export default Featured