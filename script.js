document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const operators = ['%', '/', '*', '-', '+', '='];
    
    function appendToDisplay(val) {
        if ((display.value === '' || display.value === 'Error') && operators.includes(val)) return;
        if (display.value === 'Error') display.value = '';
        display.value += val;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        if ((display.value === '' || display.value === 'Error') && operators.includes(val)) return;
        try {
            display.value = eval(display.value.replace('%', '/100'));
        } catch (e) {
            display.value = 'Error';
        }
    }

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});
