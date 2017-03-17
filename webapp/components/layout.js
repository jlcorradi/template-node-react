import React from 'react';
import Menu from './menu';

export default class Layout extends React.Component {
    render() {
        return (            
            <div>
                <Menu/>
                <div class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}