import React, { Component } from 'react'

export class Unmounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: <h5>click on the method to see its description</h5>
        }
    }




    componentWillUnmountHandler = () => {
        this.setState({
            description: <h5>
                <p>The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>
                <p>Example:</p>
                <p>Click the button to delete the header:</p>
            </h5>
        })

    }
    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-warning" onClick={this.componentWillUnmountHandler}>componentWillUnmount()</button>
                <div>
                    {this.state.description}
                </div>
            </>
        )
    }
}

export default Unmounting