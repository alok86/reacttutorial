import React, { Component } from 'react'

 let msgList = []
class Mounting extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            description: <h5>click on the method to see its description</h5>
        }
    }

    

    constHandler = () => {
        this.setState({
            description: <h5>
                <p>The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.</p>
                <p>The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).</p>
            </h5>
        })
        msgList.push('from const Handler')
    }

    derivedStatetHandler = () => {
        this.setState({
            description: <h5>
                <p>The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.</p>
                <p>This is the natural place to set the state object based on the initial props.</p>
                <p>It takes state as an argument, and returns an object with changes to the state.</p>
                <p>The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:</p>
            </h5>
        })
        msgList.push('from derived state Handler')
    }

    renderHandler = () => {
        this.setState({
            description: <h5>
                <p>The render() method is required, and is the method that actually outputs the HTML to the DOM.</p>
            </h5>
        })
       msgList.push('from render Handler')
    }

    compoDidMountHandler = () => {
        this.setState({
            description: <h5>
                <p>The componentDidMount() method is called after the component is rendered.</p>
                <p>This is where you run statements that requires that the component is already placed in the DOM.</p>
            </h5>
        })

        msgList.push('from from component did mount Handler')
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({description: msgList})
    //       }, 2000)
    //   }

    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-primary" onClick={this.constHandler}>constructor()</button>
                <button type="button" className="btn btn-outline-primary" onClick={this.derivedStatetHandler}>getDerivedStateFromProps()</button>
                <button type="button" className="btn btn-outline-primary" onClick={this.renderHandler}>render()</button>
                <button type="button" className="btn btn-outline-primary" onClick={this.compoDidMountHandler}>componentDidMount()</button>
                <div>
                    {this.state.description}
                </div>
            </>
        )
    }
}

export default Mounting