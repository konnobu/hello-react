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

ReactDOM.render(
    <Evaluator/>,
    document.getElementById('content')
);