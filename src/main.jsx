console.clear();

module.exports = function (modules, document) {
    var React = modules.React;

    var Survey = React.createClass({
        giveFuck: function (input, e) {
            e.preventDefault();
            this.setState({ fuckState: input });
        },
        render: function () {
            return <div>
                Look at all these fucks I {this.state} give.
                <div>
                    <button onClick={this.giveFuck.bind(null, 'do')}>do</button>
                    <button onClick={this.giveFuck.bind(null, 'dont')}>don&apos;t</button>
                </div>
            </div>
        }
    });

    React.render( <Survey/>, document.querySelector('body') );
};