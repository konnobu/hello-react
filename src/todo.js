var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
    getInitialState: function () {
        return {
            todoItems: [
                {id: 0, name: 'Reactを学習する'},
                {id: 1, name: 'Angular2のチュートリアルを試す'},
                {id: 2, name: 'Vue.jsのチュートリアルを試す'}
            ],
            newItem: ''
        };
    },
    handleEdit: function (e) {
        this.setState({newItem: e.target.value});
    },
    handleAdd: function (e) {
        var idName = {id: Date.now(), name: this.state.newItem};
        var newItems = this.state.todoItems.concat(idName);
        this.setState({todoItems: newItems});
        this.setState({newItem: ''});
    },
    handleRemove: function (i) {
        var tempItems = this.state.todoItems;
        tempItems.splice(i, 1);
        this.setState({todoItems: tempItems});
    },
    render: function () {
        var currentItems = this.state.todoItems.map((item, i) =>
            <div key={item.id}>
                <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => this.handleRemove(i)}
                />{item.name}
            </div>);

        return (
            <div>
                TODO:
                <input
                    type="text"
                    value={this.state.newItems}
                    onChange={this.handleEdit}
                />
                <input
                    type="button"
                    value="追加"
                    onClick={this.handleAdd}
                />
                <ReactCSSTransitionGroup
                    transitionName="fadingText"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={300}>
                    {currentItems}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

ReactDOM.render(
    <TodoList/>,
    document.getElementById('content')
);