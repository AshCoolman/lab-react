console.clear();
module.exports = function (modules, document) {
    var React = modules.React;
    // React = require("react");

    var LikeListItem = React.createClass({
        getDefaultProps: function () {
            return {
                text: 'Dunno!'
            }
        },
        render: function () {
            return <li>{this.props.text}</li>
        }
    });
    var App  = React.createClass({
        render: function () {
            return <div>
                    <ol>
                        <LikeListItem text="turtles"/>
                        <LikeListItem/>
                    </ol>
                </div>
        },
        handleClick: function (bound1, bound2, e) {
            e.target.textContent = [bound1, bound2].join(', ');
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};