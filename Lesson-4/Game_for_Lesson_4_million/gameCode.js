var event, ok, winSum = 0;

displayOfQuestion("a00");

switch (event) {

    case 3:
        displayOfQuestion("b00");
        switch (event) {

            case 2:
                displayOfQuestion("c00");
                switch (event) {

                    case 3:
                        alert('Вы победили! Вы выиграли: ' + winSum + '$');
                        break;

                    case -1:
                        break;

                    default:
                        alert('Ответ не верный, вы проиграли');
                }

            case -1:
                break;

            default:
                alert('Ответ не верный, вы проиграли');
        }

    case -1:
        break;

    default:
        alert('Ответ не верный, вы проиграли');
}

alert('Спасибо за игру');



//------------------------------------------

function displayOfQuestion(codeQuestion) {

    // param: codeQuestion - код вопроса

    // Отделяем буквенные символы от кода вопроса, что бы в последующем найти по ним варианты ответов
    var lettersQuestions = codeQuestion.substr(0, codeQuestion.indexOf("0"));

    // Получаем числовое колличество ответов
    var countAnswers = works[lettersQuestions + "0"];

    // Записываем вопрос в переменную, в последующем будем добовлять к ней ответы
    var textQuestAndAnswer = works[codeQuestion];

    
    for (var i = 1; i <= countAnswers; i++) {

        // Дописываем к вопросу, все варианты ответов
        textQuestAndAnswer += works[lettersQuestions + i];
    }

    do {
        ok = false;
        event = +prompt(textQuestAndAnswer + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(countAnswers, event);
        }
    } while (!ok);


    // Сохраняем коды выбранных вариантов вопросов и ответов
    winSum += 1000;
}


function isAnswer(q, event) {

    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}