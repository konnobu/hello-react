var ColoredButton = React.createClass({
    render: function () {
        return (
            <button {...this.props}>
                {this.props.children}
            </button>
        )
    }
});

ReactDOM.render(
    <ColoredButton
        style={{
            color: '#F26964',
            backgroundColor: '#1253A4',
            fontFamily: 'serif',
            fontsize: 22
        }}
        type='button'
        disable={false}>
        Click Me!
    </ColoredButton>,
    document.getElementById('content')
);