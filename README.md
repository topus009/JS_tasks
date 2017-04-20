# JS-tasks
Проверьте в `NODE.JS`
`cd JS_tasks`
`node имя_файла.js`
***
- В репозитории находятся 7 заданий
- `3` и `4` задания занесены в папку `mytest3-4`
- К тому же, файл `parallel_async.js` требует наличия модуля `async.js`, который находится в папке `node_modules` - она не очень большая, поэтому решил ее тоже залить
***
По заданиям:
1. В задаче `1` требовалось сгенерировать массив случайных чисел от -100 до 100 (10.000.000 хватит), а также найти оптимальный (быстрый метод), посчитать среднее, мин. и макс. значения, записать в файл с символом`#`. Если у вас нет диска `F` или у вас другая `OS`, то надо или поменять переменную `location` в функции `fileWhite` или уже поколдовать с бубном немного. Я реализовал как мне кажется один из самых быстрых способов. Много тестил. Ниже в закомменченном виде были другие варианты. Например, отказался от метода `Math.min()`, `Math.max()`, так как они жрут больше ресурсов и у них есть ограничение на количество элементов в массиве. Из-за прожорливости отказался от метода `.reduce()`.
2. В задаче `2` реализовал сразу много способов поиска уникальных символов в строке, выводя для каждой длительность выполнения.
3. В задачах `3` и `4` я попробовал реализовать последовательное выполнение функций разными способами, а также сымитировать параллельное выполнение с использованием модуля `async.js`.
4. В задаче `5` воспользовался теоремой пифагора, но потом переписал формулу для `N-мерного` массива, которая правда выглядит почти также. Все довольно просто.
5. В задаче `6` прогоняю циклом по свойствам, объекта, попутно проверяя их тип, и обычным `if/else` решаю, что делать (выводить значение в консоль или выполнять свойство-функцию).
6. В задаче `7` воспользовался двумя встроеннымы в `Node.js` модулями `os` и `http`. Первый позволяет нам обращаться к параметрам системы, запрашиваать инфу по архитектуре и железу, а второй - создавать простой сервер.



