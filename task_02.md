# Домашняя работа #2

1. Создать объект counter всеми возможными способами:

    ```javascript
    // Литеральный способ
    const counter1 = { count: 0 };

    // Конструктор объекта
    const counter2 = new Object();
    counter2.count = 0;

    const counter3 = Object({ count: 0 });

    function CreateCounter() {
      this.count = 0;
    }
    const counter4 = new CreateCounter();

    class Counter {
      constructor() {
        this.count = 0;
      }
    }
    const counter5 = new Counter();

    // Встроенные методы объекта
    const counter6 = Object.assign({}, { count: 0 });
    const counter7 = Object.assign({}, counter6);

    const counter8 = Object.create(null);
    counter8.count = 0;

    const counter9 = Object.create({}, {
      count: {
        value: 0,
        configurable: true,
        enumerable: true,
        writable: true,
      }
    })

    const counter10 = Object.defineProperty({}, 'count', {
      value: 0,
      configurable: true,
      enumerable: true,
      writable: true,
    });

    const counter11 = Object.defineProperties({}, {
      count: {
        value: 0,
        configurable: true,
        enumerable: true,
        writable: true,
      },
    });
    ```

2. Скопировать объект counter всеми возможными способами:

    ```javascript
    const counter = {count: 1};

    const shallowCopy1 = { ...counter };

    const shallowCopy2 = Object.assign({}, counter);

    const shallowCopy3 = _.clone(counter) // lodash + _.cloneWith

    const deepCopy1 = structuredClone(counter);

    const deepCopy2 = JSON.parse(JSON.stringify(counter))

    const deepCopy3 = _.cloneDeep(counter) // lodash + _.cloneDeepWith

    ```

3. Создать функцию makeCounter всеми описанными и возможными способами:

    ```javascript
    // Function Declaration
    function makeCounter1() {
      return { count: 1 };
    }

    // Function Expression
    const makeCounter2 = function() {
      return { count: 1 };
    }

    // Arrow Function
    const makeCounter3 = () => { count: 1 };

    // Named Function Expression
    const makeCounter4 = function innerMakeCounter() {
      return { count: 1 };
    }

    ```

4. Написать функцию глубокого сравнения двух объектов:

    ```javascript
    // TODO
    ```

5. Развернуть строку в обратном направлении при помощи методов массивов:

    ```javascript
    const reverseStr1 = str => str.split('').reverse().join('');

    const reverseStr2 = str => [...str].reverse().join('');

    const reverseStr3 = str => {
      let res = '';
      str.split('').forEach(char => res = char + res);
      return res;
    }

    const reverseStr4 = str => str.split('').reduce((res, char) => char + res, '');
    ```
