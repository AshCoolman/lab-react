console.clear();
module.exports = function (modules, document) {
    var React = modules.React;

    var Survey = React.createClass({
        getInitialState: function () {
            return {
                peopleCsv: [
                    "ash,blue,black",
                    "george,black,gold",
                    "sandy,yellow,silver"
                ]
            }
        },
        generatePeopleCsv: function () {

            var getRandom = function (names) {
                return names[Math.round(names.length * Math.random())];
            },
            getRandomName = function () {
                return getRandom("Gary,Barry,Stephen,James".split(','));
            },
            getRandomColour = function () {
                return getRandom("red,salmon,aquamarine,gold,orange,brown,black".split(','));
            };

            var people = [];
            for (var p = 0; p < 4; p++) {
                people.push([
                    getRandomName(),
                    getRandomColour(),
                    getRandomColour()
                ].join(','));
            }
            this.setState({peopleCsv:people});
        },
        render: function () {
            if (!this.state['peopleCsv']) {
                return <p>You dun fucked up son</p>
            }
            return (
                <div>
                    <div>
                        <button onClick={this.generatePeopleCsv}>generatePeopleCsv</button>
                    </div>
                {

                    this.state.peopleCsv.map( function (e, i, a) {
                        var name, top, bottom;
                        [ name, top, bottom ] = e.split(',');
                        return <div>
                            <p>
                                <i style={{color: 'grey'}}>{ name }</i>
                                <div style={{color: top }}>top</div>
                                <div style={{color: bottom }}>bottom</div>
                            </p>
                        </div>
                    })
                }
            </div>
            )
        }
    });

    React.render( <Survey/>, document.querySelector('body') );
};