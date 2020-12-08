import React from "react";

export default class extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                 Post #{this.props.match.params.some}
            </div>
        )
    }
}