console.clear();
module.exports = function (modules, document) {
    var React = modules.React;
    // React = require("react");

    var LikeList = React.createClass({
        render: function () {
            return (
            <ol>
                <li>{this.props.text}</li>
            </ol>
            )
        }
    });
    var App  = React.createClass({
        render: function () {
            return <div>
                    <LikeList text="turtles"/>
                </div>
        },
        handleClick: function (bound1, bound2, e) {
            e.target.textContent = [bound1, bound2].join(', ');
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};