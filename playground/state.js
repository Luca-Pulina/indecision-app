class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    // vecchio metodo di gestire lo state
    handleAddOne() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }
        ))
    }
    // nuovo metodo già presente nella documentazione. Se devo passare altri parametri ad esempio il props,
    //in handleAddOne, l'importante è mettere direttamente le tonde dopo la arrow senza il return
    handleMinusOne() {
        this.setState({
            count: this.state.count - 1
        }
        )
    }

    handleReset() {
        this.setState(() => ({
            count: 0
        }
        ))
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleReset}>reset</button>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))