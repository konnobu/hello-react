var TextInput = React.createClass({
    getInitialState: function () {
        return {dispText: '入力欄'};
    },
    handleInput: function (event) {
        this.setState({dispText: event.target.value});
        console.log(event.target.value);
    },
    render: function () {
        return (
            <div>JSX Input:
                <input
                    type='text'
                    value={this.state.dispText}
                    onChange={this.handleInput}
                />
            </div>
        )
    }
});

ReactDOM.render(
    <TextInput/>,
    document.getElementById('content')
);