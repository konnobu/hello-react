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

var MultiElement = React.createClass({
   render: function () {
       return React.DOM.div(null,
         React.DOM.h2(null, 'First'),
         React.DOM.h2(null, 'Second'),
         React.DOM.h2(null, 'Third')
       );
   }
});

ReactDOM.render(
  React.createElement(MultiElement),
    document.getElementById('content')
);