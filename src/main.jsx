console.clear();

module.exports = function (modules, document) {
    var React = modules.React;

    var Like = React.createClass({
        render: function () {
            return <LikeList><LikeListItem ref="first" text="turtles"/> </LikeList>
        }
    });

    var LikeList = React.createClass({
        render: function () {
            return <ol> { this.props.children } </ol>
        }
    });

    var LikeListItem = React.createClass({
        render: function () {
            return <li>{this.props.text}</li>
        }
    });


    var App  = React.createClass({
        render: function () {
            return <Like/>
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};