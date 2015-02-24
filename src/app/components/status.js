'use strict';

var React           = require('react'),
    StatusActions   = require('../actions/status-actions'),
    StatusStore     = require('../stores/status-store');

var Status = React.createClass({

    getInitialState: function() {
        return getStateFromStore();
    },

    componentDidMount: function() {
        StatusStore.addChangeListener(this._handleChange);
    },

    componentWillUnmount: function() {
        StatusStore.removeChangeListener(this._handleChange);
    },

    _handleChange: function(text) {
        this.setState(getStateFromStore());
    },

    _setOnline: function(event) {
        event.preventDefault();
        StatusActions.online();
    },

    _setOffline: function(event) {
        event.preventDefault();
        StatusActions.offline();
    },

    render: function() {
        /* jshint ignore:start */
        return (
            <div>
                <h3>Status: <code>{this.state.status}</code></h3>
                <h3>Token: <code>{this.state.token}</code></h3>
                <a href="#" className="btn btn-xs btn-primary" onClick={this._setOnline}>Go Online</a>
                <a href="#" className="btn btn-xs btn-default" onClick={this._setOffline}>Go Offline</a>
            </div>
        );
        /* jshint ignore:end */
    }

});

function getStateFromStore() {
    return {
        status: StatusStore.getStatus(),
        token: StatusStore.getToken()
    }
}

module.exports = Status;