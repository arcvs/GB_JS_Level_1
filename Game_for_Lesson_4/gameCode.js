var event, ok, savedQuestions = [];


// Все циклы вывода вопросов и ответов убраны в функцию "displayOfQuestion( param: codeQuestion )"
displayOfQuestion("a00");


switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        displayOfQuestion("b00");

        switch (event) {

            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                displayOfQuestion("d00");
                break;

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                displayOfQuestion("d00");
                break;

            case -1: // Второе действие
                break;

            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        displayOfQuestion("c00");

        switch (event) {

            case 1: // Второе действие
                displayOfQuestion("d00");
                break;

            case 2: // Второе действие
                displayOfQuestion("d00");
                break;

            case -1: // Второе действие
                break;

            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

// console.log(savedQuestions)


// Выодим возможномть выбора выбранных ранее вопросов и ответов
do {

    ok = false;

    var text = "";
    for (var i = 0; i < savedQuestions.length; i++) {
        text += "  " + (i+1) + "  Код вороса: " + savedQuestions[i][0] + "\n";
    }

    event = +prompt("Просмотр истории игры.\nВведите номер хода:\n" + text + '-1 - Выход из истории игры');

    if (event == -1) {
        break;
    }
    else {
        if (!isAnswer(savedQuestions.length, event)) {
            continue;
        }
    }

    alert("Вопрос:\n" + works[savedQuestions[event-1][0]] + "\nОтвет:\n" + works[savedQuestions[event-1][1]]);

} while (1);


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


    // Сохраняем коды вариантов вопросов и ответов
    savedQuestions.push([codeQuestion, lettersQuestions + event]);
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