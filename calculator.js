let currentResult = '0';

function appendToResult(value) {
    if (currentResult === '0' && value !== '.') {
        currentResult = value;
    } else {
        currentResult += value;
    }
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '0';
    document.getElementById('result').value = currentResult;
}

function calculateResult() {
    try {
        currentResult = eval(currentResult).toString();
        document.getElementById('result').value = currentResult;
    } catch (error) {
        currentResult = 'Error';
        document.getElementById('result').value = currentResult;
    }
}
