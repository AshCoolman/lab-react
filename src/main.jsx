console.clear();
module.exports = function (modules, document) {
    var React = modules.React;
    // React = require("react");

    var App  = React.createClass({
        render: function () {
            return <h2>
                    Hello there ok awesome!!
                    <div onClick= {this.handleClick.bind(null, 'Bang', 'I shot my lover down')}>XXX</div>
                    <div onClick= {this.handleClick.bind(null, 'Boom', '( there goes the )')}>XXX</div>
                </h2>
        },
        handleClick: function (bound1, bound2, e) {
            e.target.textContent = [bound1, bound2].join(', ');
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};