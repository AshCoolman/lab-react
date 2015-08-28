console.clear();
module.exports = function (modules, document) {
    var React = modules.React;
    // React = require("react");

    var App  = React.createClass({
        render: function () {
            return <h2>
                    Hello there ok awesome!!
                    <div onClick= {this.handleClick} data-msg="Hey">Hey</div>
                    <div onClick= {this.handleClick} data-msg="Boom">Boom</div>
                </h2>
        },
        handleClick: function (e) {
            e.preventDefault();
            var msg = e.target.getAttribute('data-msg');
            console.log(msg);
        }
    });

    React.render( <App></App>, document.querySelector('body') );
};