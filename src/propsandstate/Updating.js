import React, { Component } from 'react'

export class Updating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: <h5>click on the method to see its description</h5>
        }
    }




    derivedStatetHandler = () => {
        this.setState({
            description: <h5>
                <p>Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.</p>
                <p>This is still the natural place to set the state object based on the initial props.</p>
                <p>The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:</p>
            </h5>
        })
        
    }

    shoudCompoHandler = () => {
        this.setState({
            description: <h5>
                <p>In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.</p>
                <p>The default value is true.</p>
                <p>The example below shows what happens when the shouldComponentUpdate() method returns false:</p>
            </h5>
        })
        
    }

    renderHandler = () => {
        this.setState({
            description: <h5>
                <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
            </h5>
        })
        
    }

    getSnapshotBeforeUpdateHandler = () => {
        this.setState({
            description: <h5>
                <p>In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.</p>
                <p>If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.</p>
                <p>The example below might seem complicated, but all it does is this:</p>
                <p>When the component is mounting it is rendered with the favorite color "red".</p>
                <p>When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".</p>
                <p>This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.</p>
                <p>Then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element:</p>
                <p>Example:</p>
                <p>Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:</p>
            </h5>
        })

        
    }

    componentDidUpdateHandler = () => {
        this.setState({
            description: <h5>
                <p>The componentDidUpdate method is called after the component is updated in the DOM</p>.
                <p>The example below might seem complicated, but all it does is this:</p>
                <p>When the component is mounting it is rendered with the favorite color "red".</p>
                <p>When the component has been mounted, a timer changes the state, and the color becomes "yellow".</p>
                <p>This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:</p>
                <p>Example:</p>
                <p>The componentDidUpdate method is called after the update has been rendered in the DOM:</p>
            </h5>
        })

    }
    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-secondary" onClick={this.derivedStatetHandler}>getDerivedStateFromProps()</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.shoudCompoHandler}>shouldComponentUpdate()</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.renderHandler}>render()</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.getSnapshotBeforeUpdateHandler}>getSnapshotBeforeUpdate()</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.componentDidUpdateHandler}>componentDidUpdate()</button>
                <div>
                    {this.state.description}
                </div>
            </>
        )
    }
}

export default Updating