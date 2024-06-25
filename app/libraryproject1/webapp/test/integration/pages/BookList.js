sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.app.libraryproject1',
            componentId: 'BookList',
            contextPath: '/Book'
        },
        CustomPageDefinitions
    );
});