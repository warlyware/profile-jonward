angular.module('profile-jonward.home')
    .controller('LandingController', [function() {
        console.log('Landing Ctrl online');

        function animateMidsection() {
            TweenLite.to($('.landing-split'), 0.5, {
                borderTopWidth: '400',
                borderBottomWidth: '0',
                borderLeftWidth: '100',
                borderRightWidth: '0',
                borderStyle: 'solid',
                x: 0
            });
            TweenLite.to($('.landing-left'), 0.5, {
                paddingRight: '0'
            });
        }

        function consoleLog() {
            console.log('i am console log');
        }

        TweenLite.from($('#main'), 1, {
            height: '5',
            ease: Power3.easeOut,
            onComplete: animateMidsection
        });

        TweenLite.from($('.landing-split'), 1   , {
            height: '5',
            ease: Power3.easeOut,
            x: '100'
        });

    }]);
