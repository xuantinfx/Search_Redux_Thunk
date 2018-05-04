import React from 'react'

export default class Topic extends React.Component {
    render(){
        return (
            <li>{this.props.children}</li>
        )
    }
}