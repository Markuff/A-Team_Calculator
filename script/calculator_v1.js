function calculator() {
    var digits, isDot, markerClick, /*markerKey, */operator, textToDisplayX, textToDisplayY;

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    isDot = false;
    markerClick = 'click';
    //markerKey = 'keydown';
    operator = false;
    textToDisplayX = "";
    textToDisplayY = "";

    for (var i = 0; i < digits.length; i++) {
        document.getElementById('digit-' + digits[i]).addEventListener(markerClick, clickDigit);
        //document.getElementById('digit-' + digits[i]).addEventListener(markerKey, pushDigit);
    }
    
    document.getElementById('digit-dot').addEventListener(markerClick, pushDot);

    function clickDigit() {
        if (this.id === 'digit-0' && (textToDisplayX === "" || textToDisplayX === "0")) {
            textToDisplayX = "0";
        } else {
            if (textToDisplayX.length > 0 && textToDisplayX[0] === '0' && textToDisplayX[1] != '.') {
                textToDisplayX = textToDisplayX.slice(1, textToDisplayX.length);
            }

            textToDisplayX += parseInt(this.id[6]);
        }

        document.getElementById('display').innerHTML = '<span>' + textToDisplayX + '</span>';

        return textToDisplayX;
    }

console.log(textToDisplayX);
    /*function pushDigit() {
        console.log('for keyboard events');
    }*/

    function pushDot() {
        isDot = true;
        textToDisplayX += '.';
        document.getElementById('display').innerHTML = '<span>' + textToDisplayX + '</span>';
        document.getElementById('digit-dot').removeEventListener(markerClick, pushDot);
    }
}

calculator();