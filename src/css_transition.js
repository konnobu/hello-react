var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var CheckAnimate = React.createClass({
    getInitialState: function () {
        return {
            checked: false,
            visibleText: ''
        };
    },
    checkChange: function (e) {
        if (e.target.checked) {
            this.setState({visibleText: '普段は見えないテキスト'})
        } else {
            this.setState({visibleText: ''})
        }
        this.setState({checked: e.target.checked});
    },
    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="fadingText"
                transitionEnterTimeout={1500}
                transitionLeaveTimeOut={500}
                transitionAppear={true}
                transitionAppearTimeout={800}>
                <div>
                    <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.checkChange}
                    /> 隠れたテキストを表示
                </div>
                <h2 key={this.state.checked}>{this.state.visibleText}</h2>
            </ReactCSSTransitionGroup>
        )
    }
});

ReactDOM.render(
    <CheckAnimate />,
    document.getElementById('content')
);