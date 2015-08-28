console.clear();

module.exports = function (modules, document) {
    var React = modules.React;

    var Survey = React.createClass({
        getInitialState: function () {
            return {
                fuckGiven: true
            }
        },
        giveFuck: function (input, e) {
            e.preventDefault();
            this.setState({ fuckGiven: input });
        },
        render: function () {
            return <div>
                Look at all these fucks I {this.state.fuckGiven ? 'do' : 'don\'t'} give.
                <div>
                    <button onClick={this.giveFuck.bind(null, !this.state.fuckGiven)}>toggle</button>
                </div>
            </div>
        }
    });

    React.render( <Survey/>, document.querySelector('body') );
};