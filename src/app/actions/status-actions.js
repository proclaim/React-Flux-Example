'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    StatusActions;

StatusActions = {

    online: function() {
        AppDispatcher.handleViewAction({
            actionType: 'ONLINE',
            customProperty: 'game-on'
        });
    },

    offline: function() {
        AppDispatcher.handleViewAction({
            actionType: 'OFFLINE',
            customProperty: 'good-game'
        });
    },
};

module.exports = StatusActions;