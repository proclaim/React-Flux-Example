'use strict';

var React       = require('react'),
    Status      = require('./components/status'),
    ExampleApp;

ExampleApp = React.createClass({

    render: function() {
        return (
        	/*jshint ignore:start */
            <div className="container">
                <Status />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
