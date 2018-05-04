import React from 'react'
import { Alert } from 'reactstrap'

export default class Message extends React.Component {
    render(){
        return (
            <Alert color="secondary">{this.props.children}</Alert>
        )
    }
}