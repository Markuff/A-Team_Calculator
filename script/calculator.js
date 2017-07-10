function calculator() {
    var 
    CONSTANTS,
    counter,
    digits,
    isDot,
    textToDisplay;

    CONSTANTS = {
        'DIGITS': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        'IDS': {
            'CLEARCURRENT': 'clear-current',
            'DIGIT': 'digit-',
            'DIGITDOT': 'digit-dot',
            'DISPLAY': 'display'
        },
        'MARKERS': {
            'CLICK': 'click',
            'KEY': 'keydown'
        },
        'TAGS': {
            'SPANO': '<span>',
            'SPANX': '</span>'
            
        }
    };
    counter = 0;
    isDot = false;
    isZero = false;
    textToDisplay = "";

    function setEvents () {
        for (counter = 0; counter < CONSTANTS.DIGITS.length; counter++) {
            ael(CONSTANTS.IDS.DIGIT + CONSTANTS.DIGITS[counter], CONSTANTS.MARKERS.CLICK, digitEvent);
            ael(CONSTANTS.IDS.DIGIT + CONSTANTS.DIGITS[counter], CONSTANTS.MARKERS.KEY, digitEvent);
        }

        ael(CONSTANTS.IDS.CLEARCURRENT, CONSTANTS.MARKERS.CLICK, clearEvent);
        ael(CONSTANTS.IDS.CLEARCURRENT, CONSTANTS.MARKERS.KEY, clearEvent);

        ael(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.CLICK, dotEvent);
        ael(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.KEY, dotEvent);
    }

    function clearEvent () {
        isDot = false;
        textToDisplay = "";
        refreshDisplay(textToDisplay);

        ael(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.CLICK, dotEvent);
        ael(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.KEY, dotEvent);

        return textToDisplay;
    }

    function digitEvent () {
        var digitCero = CONSTANTS.IDS.DIGIT + "0";

        if(this.id === digitCero && isZero) {
            textToDisplay = zeroDigitEvent(textToDisplay);
        }

        textToDisplay += parseInt(this.id[6]);
        refreshDisplay(textToDisplay);
        
        return textToDisplay;
    }

    function dotEvent () {
        if (isDot === false) {
            isDot = true;

            textToDisplay += '.';
            refreshDisplay(textToDisplay);

            rel(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.CLICK, dotEvent);
            rel(CONSTANTS.IDS.DIGITDOT, CONSTANTS.MARKERS.KEY, dotEvent);
        }

        return textToDisplay, isDot;
    }

    function divEvent () {}

    function lessEvent () {}

    function plusEvent () {}

    function timesEvent () {}

    function zeroDigitEvent (toCheck) {

        return toCheck;
    }

    function ael (who, what, where) {
        document.getElementById(who).addEventListener(what, where);
    }

    function rel (who, what, where) {
        document.getElementById(who).removeEventListener(what, where);
    }

    function refreshDisplay (textToRefresh) {
        document.getElementById(CONSTANTS.IDS.DISPLAY).innerHTML = CONSTANTS.TAGS.SPANO + textToRefresh + CONSTANTS.TAGS.SPANX;
    }

    setEvents();
}

calculator();