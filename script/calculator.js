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
            'CLEAR': 'clear',
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
    textToDisplay = "";

    function setEvents () {
        for (counter = 0; counter < CONSTANTS.DIGITS.length; counter++) {
            document.getElementById(CONSTANTS.IDS.DIGIT + CONSTANTS.DIGITS[counter]).
                addEventListener(CONSTANTS.MARKERS.CLICK, digitEvent);
            document.getElementById(CONSTANTS.IDS.DIGIT + CONSTANTS.DIGITS[counter]).
                addEventListener(CONSTANTS.MARKERS.KEY, digitEvent);
        }

        document.getElementById(CONSTANTS.IDS.CLEAR).
            addEventListener(CONSTANTS.MARKERS.CLICK, clearEvent);
        document.getElementById(CONSTANTS.IDS.CLEAR).
            addEventListener(CONSTANTS.MARKERS.KEY, clearEvent);

        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            addEventListener(CONSTANTS.MARKERS.CLICK, dotEvent);
        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            addEventListener(CONSTANTS.MARKERS.KEY, dotEvent);
    }

    function clearEvent () {
        isDot = false;
        textToDisplay = "";
        refreshDisplay(textToDisplay);
        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            addEventListener(CONSTANTS.MARKERS.CLICK, dotEvent);
        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            addEventListener(CONSTANTS.MARKERS.KEY, dotEvent);

        return textToDisplay;
    }

    function digitEvent () {
        textToDisplay += parseInt(this.id[6]);
        refreshDisplay(textToDisplay);
        
        return textToDisplay;
    }

    function dotEvent () {
        if (isDot === false) {
            isDot = true;
        }

        textToDisplay += '.';
        refreshDisplay(textToDisplay);
        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            removeEventListener(CONSTANTS.MARKERS.CLICK, dotEvent);
        document.getElementById(CONSTANTS.IDS.DIGITDOT).
            removeEventListener(CONSTANTS.MARKERS.KEY, dotEvent);

        return textToDisplay, isDot;
    }

    function lessEvent () {}

    function plusEvent () {}

    function refreshDisplay (number) {
        document.getElementById(CONSTANTS.IDS.DISPLAY).innerHTML = 
            CONSTANTS.TAGS.SPANO + number + CONSTANTS.TAGS.SPANX;
    }

    function timesEvent () {}

    setEvents();
}

calculator();