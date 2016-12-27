var HelloWorld = React.createClass({
    render: function () {
        return React.DOM.h2(null, 'Hello, ' + this.props.name + 'World!');
    }
});

var Evaluator = React.createClass({
    getInitialState: function() {
      return {
          expression: ''
      }  ;
    },
    reCalcValue: function(e) {
        if (e.key === 'Enter')
            this.setState({
                expression: e.target.value
            });
    },
    render: function() {
        return React.DOM.div(
            null,
            React.DOM.input({
                type: 'text',
                onKeyPress: this.reCalcValue
            }),
            React.DOM.h2(null, eval(this.state.expression))
        );
    }
});

var MultiElement = React.createClass({
    render: function () {
        return React.DOM.div(
            null,
            React.DOM.h2(null, 'First'),
            React.DOM.h2(null, 'Second'),
            React.DOM.h2(null, 'Third')
        );
    }
});

ReactDOM.render(
    React.createElement(Evaluator),
    document.getElementById('content')
);