console.clear();

module.exports = function (modules, document) {
    var React = modules.React;

    var LikeList = React.createClass({
        componentDidMount: function () {
            console.log(this.refs.first.getDOMNode())
        },
        render: function () {
            return <ol> <LikeListItem ref="first" text="turtles"/> </ol>
        }
    });

    var LikeListItem = React.createClass({
        render: function () {
            return <li>{this.props.text}</li>
        }
    });

    var App  = React.createClass({
        render: function () {
            return <LikeList/>
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};