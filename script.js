let display = document.getElementById('display');
        let currentInput = '';
        let operator = '';
        let previousInput = '';
        function appendNumber(number) {
            if (currentInput === '0' && number !== '.') {
                currentInput = number;
            } else {
                currentInput += number;
            }
            updateDisplay();
        }
        function appendOperator(op) {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    calculate();
                }
                operator = op;
                previousInput = currentInput;
                currentInput = '';
            }
        }
function calculate() {
            if (previousInput !== '' && currentInput !== '' && operator !== '') {
                let result;
                const prev = parseFloat(previousInput);
                const curr = parseFloat(currentInput);
                switch (operator) {
                    case '+':
                        result = prev + curr;
                        break;
                    case '-':
                        result = prev - curr;
                        break;
                    case '*':
                        result = prev * curr;
                        break;
                    case '/':
                        result = prev / curr;
                        break;
                    default:
                        return;
                }
                currentInput = result.toString();
                operator = '';
                previousInput = '';
                updateDisplay();
            }
        }
function clearDisplay() {
            currentInput = '';
            operator = '';
            previousInput = '';
            updateDisplay();
        }
        function updateDisplay() {
            display.textContent = currentInput || '0';
        }