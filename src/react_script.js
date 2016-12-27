var HelloWorld = React.createClass({
   render: function() {
       return React.DOM.h2(null, 'Hello, ' + this.props.name + 'World!');
   }
});

var Evaluator = React.createClass({
   render: function() {
       return React.DOM.h2(null, eval(this.props.text));
   }
});

ReactDOM.render(
  React.createElement(
      Evaluator,
      {
          text: '10 / 2'
      }
  ),
    document.getElementById('content')
);