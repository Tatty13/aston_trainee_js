import { FC } from 'react';
import style from '../tasks.module.scss';

export const Task2: FC = () => {
  return (
    <ol className={style.list}>
      <li>
        <h3>Создать объект counter всеми возможными способами:</h3>
        <pre className={style.codeBlock}>
          <code>
            {`
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

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>Скопировать объект counter всеми возможными способами:</h3>
        <pre className={style.codeBlock}>
          <code>
            {`
const counter = {count: 1};

const shallowCopy1 = { ...counter };

const shallowCopy2 = Object.assign({}, counter);

const shallowCopy3 = _.clone(counter) // lodash + _.cloneWith

const deepCopy1 = structuredClone(counter);

const deepCopy2 = JSON.parse(JSON.stringify(counter))

const deepCopy3 = _.cloneDeep(counter) // lodash + _.cloneDeepWith

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Создать функцию makeCounter всеми описанными и возможными способами:
        </h3>
        <pre className={style.codeBlock}>
          <code>
            {`
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

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>Написать функцию глубокого сравнения двух объектов:</h3>
        <pre className={style.codeBlock}>
          <code>
            {`
const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 !== 'object' || !obj1) return obj1 === obj2;

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let i = 0; i < obj1Keys.length; i++) {
    const currentKey = obj1Keys[i];
    const obj1Value = obj1[currentKey];
    const obj2Value = obj2[currentKey];

    if (obj1Value === obj2Value) continue;

    return deepEqual(obj1Value, obj2Value);
  }

  return true;
};

const obj1 = {
  here: {
    is: 'on',
    other: '3',
  },
  object: 'Y',
};

const obj2 = {
  here: {
    is: 'on',
    other: '2',
  },
  object: 'Y',
};

console.log(deepEqual(obj1, obj2)); // false

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Развернуть строку в обратном направлении при помощи методов массивов:
        </h3>
        <pre className={style.codeBlock}>
          <code>
            {`
const reverseStr1 = str => str.split('').reverse().join('');

const reverseStr2 = str => [...str].reverse().join('');

const reverseStr3 = str => {
  let res = '';
  str.split('').forEach(char => res = char + res);
  return res;
}

const reverseStr4 = str => str.split('').reduce((res, char) => char + res, '');

`}
          </code>
        </pre>
      </li>
    </ol>
  );
};
