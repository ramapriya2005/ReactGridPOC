//Grid Item Component
import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import './style.css';

export default class GridItem extends Component {
    render() {
        return (
            <Card className="grid-item">
                <CardTitle title={this.props.title} />
                <CardText>
                    <p>
                        {this.props.text}
                    </p>
                </CardText>
            </Card>
        );
    }
}
