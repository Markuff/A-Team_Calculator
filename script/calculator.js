function calculator() {
    var digits, isDot, operator, textToDisplayX, textToDisplayY;

    digits = [1, 2, 3,4,5,6,7,8,9,0];
    isDot = false;
    operator = false;
    textToDisplayX = "";
    textToDisplayY = "";

    for (var i = 0; i < digits.length; i++) {
        document.getElementById('digit-' + digits[i]).addEventListener('click', clickDigit);
        document.getElementById('digit-' + digits[i]).addEventListener('keydown', pushDigit);
    }
    
    document.getElementById('digit-dot').addEventListener('click', pushDot);
    //document.getElementById('digit-dot').addEventListener('click', pushDot);

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
    }

    function pushDigit() {
        console.log('for keyboard events');
    }

    function pushDot() {
        isDot = true;
        textToDisplayX += '.';
        document.getElementById('display').innerHTML = '<span>' + textToDisplayX + '</span>';
        document.getElementById('digit-dot').removeEventListener('click', pushDot);
    }
}

calculator();