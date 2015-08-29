console.clear();
console.log('ok');
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
        render: function () {
            return (
                <div>
                {
                    this.state.peopleCsv.map( function (e, i, a) {
                        var name, top, bottom;
                        [ name, top, bottom ] = e.split(',');
                        console.log([name, top, bottom]);
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