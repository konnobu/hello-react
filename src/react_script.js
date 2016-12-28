var HelloWorld = React.createClass({
    render: function () {
        return (
            <h2>Hello, {this.props.name} World!</h2>
        )
    }
});

var MultiElements = React.createClass({
    render: function () {
        return (
            <div>
                <h2>First Element</h2>
                <h2>Second Element</h2>
                <h2>Third Element</h2>
            </div>
        )
    }
});

var Evaluator = React.createClass({
    getInitialState: function () {
        return {
            expression: ''
        };
    },
    reCalcValue: function (e) {
        if (e.key === 'Enter') {
            this.setState({
                expression: e.target.value
            });
        }
    },
    render: function () {
        return (
            <div>
                <input
                    type='text'
                    onKeyPress={this.reCalcValue}
                />
                <h2>{eval(this.state.expression)}</h2>
            </div>
        )
    }
});

var RandomColor = React.createClass({
    render: function () {
        return (
            <h2 style={{color: this.props.value >= 0 ? 'green' : 'red'}}>
                the number is {this.props.value}
            </h2>
        )
    }
});

ReactDOM.render(
    <div>
        <p><input type="checkbox" checked/>JSX Check!</p>
        <p><input type="checkbox" checked="{true}"/>JSX Check2!</p>
        <p><input type="checkbox" checked="{false}"/>JSX Check3!</p>
    </div>,
    document.getElementById('content')
);