sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/libraryproject1/test/integration/FirstJourney',
		'com/app/libraryproject1/test/integration/pages/BookList',
		'com/app/libraryproject1/test/integration/pages/BookObjectPage',
		'com/app/libraryproject1/test/integration/pages/ActiveLoansObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookList, BookObjectPage, ActiveLoansObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/libraryproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookList: BookList,
					onTheBookObjectPage: BookObjectPage,
					onTheActiveLoansObjectPage: ActiveLoansObjectPage
                }
            },
            opaJourney.run
        );
    }
);