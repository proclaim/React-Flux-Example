'use strict';

var Dispatcher  = require('./dispatcher'),
    assign      = require('object-assign'),
    AppDispatcher;

AppDispatcher = assign({}, Dispatcher.prototype, {

    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;