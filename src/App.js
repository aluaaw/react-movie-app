import React from "react";

class App extends React.Component {

    state = {
        count: 0
    }
    plus = () => {
        this.setState(current => ({count: current.count + 1}))
    }
    minus = () => {
        this.setState(current => ({count: current.count - 1}))
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentDidMount() {
        console.log('mount');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update');
    }
    componentWillUnmount() {
        console.log('good bye');
    }

    render() {
        console.log('rendering')
        return <div>
            <h1>the number is {this.state.count}</h1>
            <button id="plus" onClick={this.plus}>plus</button>
            <button id="minus" onClick={this.minus}>minus</button>
        </div>
    }
}

export default App;