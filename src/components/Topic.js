import React from 'react'

export default class Topic extends React.Component {
    render(){
        return (
            <h5 style={{marginTop: 50}}>{this.props.children}</h5>
        )
    }
}