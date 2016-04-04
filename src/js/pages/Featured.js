import React from "react";
import Article from "../components/Article";

class Featured extends React.Component 
{
    render () {
        let Articles = [
        "Some Article",
        "Some Other Article",
        "Yet Another Article",
        "Even More Articles"
        ].map((title, index) => <Article key={index} title={title} />);

        let adText = [
        "Ad spot #1",
        "Ad spot #2",
        "Ad spot #3",
        "Ad spot #4",
        "Ad spot #5"
        ];

        let randomAd = adText[Math.round(Math.random() * (adText.length - 1))];

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