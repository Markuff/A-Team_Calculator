function calculator() {
    var 
    counter,
    digits,
    ids,
    tags,
    textToDisplay;

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    ids = {
        'clear': 'clear',
        'digit': 'digit-',
        'display': 'display'
    };
    markers = {
        'click': 'click',
        'key': 'keydown'
    };
    tags = {
        'spanX': '</span>',
        'spanO': '<span>'
    };
    textToDisplay = "";

    function setEvents () {
        for (counter = 0; counter < digits.length; counter++) {
            document.getElementById(ids.digit + digits[counter]).
                addEventListener(markers.click, digitEvent);
            document.getElementById(ids.digit + digits[counter]).
                addEventListener(markers.markerKey, digitEvent);
        }

        document.getElementById(ids.clear).addEventListener(markers.click, clearEvent);
    }

    function digitEvent () {
        textToDisplay += parseInt(this.id[6]);
        document.getElementById(ids.display).innerHTML = tags.spanO + textToDisplay + tags.spanX;
        
        return textToDisplay;
    }

    function clearEvent () {
        textToDisplay = "";
        document.getElementById(ids.display).innerHTML = tags.spanO + textToDisplay + tags.spanX;

        return textToDisplay;
    }

    setEvents();
}

calculator();