function calculate() {
    try {
        var value1 = parseInt(validate(document.getElementById("value1").value.trim()));
        var value2 = parseInt(validate(document.getElementById("value2").value.trim()));
        var operator = document.getElementById('operator').value;
        document.getElementById("result").value = operate(value1, value2, operator);

    } catch (err) {
        alert("Ошибка: " + err.messaqge);
    }
}


function operate(value1, value2, operator) {
    if (operator == 'addition') {
        return value1 + value2;
    } else if (operator == 'subtraction') {
        return value1 - value2;
    } else if (operator == 'division') {
        return value1 / value2;
    } else if (operator == 'multiplication') {
        return value1 * value2;
    }
}

function validate(value) {
    if (value == null || value == "") {
        alert("Первые два поля должны быть заполнены");
        return 0;
    } else if (isNaN(value)) {
        alert("Введите цифры, а не буквы");
        return 0;
    } else return value;
}