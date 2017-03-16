import React from 'react';

export default class Layout extends React.Component{
    render(){
        return(
    <div>
        <h2>App Template</h2>
        <span>Node, React, ReactRouter, Webapp</span>
        <div class="container">
            {this.props.children}
        </div>
    </div>
        );
    }
}