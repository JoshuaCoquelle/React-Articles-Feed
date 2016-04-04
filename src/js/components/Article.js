import React from "react";

class Article extends React.Component 
{
    render () {
        let { title } = this.props;

        return (
            <div class="col-md-4">
                <h3>{title}</h3>
                <hr />
                <p>
                Lalalalllalala allallallalala alallalalal lalalalalalla allalalalal
                Lalalalllalala allallallalala alallalalal lalalalalalla allalalalal
                Lalalalllalala allallallalala alallalalal lalalalalalla allalalalal
                </p>
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        );
    }
}

export default Article