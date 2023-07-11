

/* Принять от пользователя имена людей для набора в команду. Имена принять и сохранить в новом массиве. Количество имён должно соответсвовать количеству должностей. Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager']. */

var positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
var names = [];

function getNames() {
    for (var i = 0; i < positions.length; i++) {
        var name = prompt("Введіть ім'я на посаду " + positions[i]);
        names.push(name);
    }
}

// Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.

function createTeam() {
    var team = {};
    for (var i = 0; i < names.length; i++) {
        var position = positions[i];
        team[names[i]] = { name: names[i], position: position };
    }
    
    return team;
}

/* Добавить сотрудникам зарплаты (свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
если в должности есть слово "junior" сумма будет от 500 до 1000;
если в должности есть слово "middle" сумма будет от 1500 до 2000;
если в должности есть слово "senior" сумма будет от 2500 до 3000;
для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска'). Например:
   var name = 'Junior developer';
   name.indexOf('Junior'); */ 
   //в данном случае вернет 0, если такая строка отсутсвует вернет -1. 
   //Регистр имеет значение, по этому строка "junior" вернет -1

   function setSalary(team) {
    for (var name in team) {
        var position = team[name].position.toLowerCase();
        var salary;
        
        if (position.indexOf('junior') !== -1) {
            salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        } else if (position.indexOf('middle') !== -1) {
            salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        } else if (position.indexOf('senior') !== -1) {
            salary = Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
        } else {
            salary = Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000;
        }
        
        team[name].salary = salary;
    }
}

// Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").

function tellAboutYourSelf() {
    for (var name in team) {
        var employee = team[name];
        var position = employee.position;
        var salary = employee.salary;
        
        console.log("Мене звати " + name + " і я - " + position + ". Я заробляю " + salary + "$.");
    }
}

/* Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате: "John - Project manager. Зарплата - 4863$."*

Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке. Например:

getNames();
createTeam();
setSalary();
создание цикла для установки метода tellAboutYourSelf();
создание team.showTeam = function() {...};
вызов метода showTeam(); */

function showTeam(team) {
    for (var name in team) {
        var employee = team[name];
        var position = employee.position;
        var salary = employee.salary;
        
        console.log(name + " - " + position + ". Зарплата - " + salary + "$.");
    }
}

getNames();
var team = createTeam();
setSalary(team);
tellAboutYourSelf();
showTeam(team);















