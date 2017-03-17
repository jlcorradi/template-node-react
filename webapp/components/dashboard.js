import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h2>App Template</h2>
                    <p>This is a template application for developing apps using React as front-end framework</p>
                </div>
                <p>Back-end features</p>
                <ul>
                    <li>Node js</li>
                    <li>Express js server</li>                    
                </ul>
                <p>front-end features</p>
                <ul>
                    <li>React js</li>
                    <li>React Router</li>                    
                    <li>React Bootstrap</li>
                </ul>
            </div>
        );
    }
}