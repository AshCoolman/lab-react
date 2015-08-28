console.clear();
module.exports = function (modules, document) {
    var React = modules.React;
    // React = require("react");

    var App  = React.createClass({
        render: function () {
            return <h2>
                    Hello there ok awesome!!
                    <div onClick= {this.handleClick.bind(null, 'Bang')}>XXX</div>
                    <div onClick= {this.handleClick.bind(null, 'Boom')}>XXX</div>
                </h2>
        },
        handleClick: function (e) {
            console.log(e);
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};