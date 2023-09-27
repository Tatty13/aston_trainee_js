import { FC } from 'react';
import style from '../tasks.module.scss';

export const Task5: FC = () => {
  return (
    <ol className={style.list}>
      <li>
        <h3>Порешать типовые задачи - написать порядок и вывод в консоли</h3>
        <pre className={style.codeBlock}>
          <code>
            {`
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); // зарезолвит промис со значением 'a'
});

promiseTwo
  .then((res) => { // res = 'a'
    return res + "b"; // вернёт промис со значением 'ab'
  })
  .then((res) => { // res = 'ab'
    return res + "с"; // вернёт промис со значением 'abc'
  })
  .finally((res) => { // res = undefined
    return res + "!!!!!!!"; // ничего не вернёт
  })
  .catch((res) => { // пропустит этот блок
    return res + "d";
  })
  .then((res) => { // res = 'abc'
    console.log(res); // выведет в консоль 'abc', вернёт промис со значением undefined
  });

// порядок вывода в консоль:
// 1) 'abc'

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>Порешать типовые задачи - написать порядок и вывод в консоли</h3>
        <pre className={style.codeBlock}>
          <code>
            {`
function doSmth() {
  return Promise.resolve("123");
}

doSmth() // вернёт зарезолвенный промис со значением '123'
  .then(function (a) { // a = '123'
    console.log("1", a); // выведет в консоль '1 123'
    return a; // вернёт промис со значением '123'
  })
  .then(function (b) { // b = '123'
    console.log("2", b); // выведет в консоль '2 123'
    return Promise.reject("321"); // отклонит промис со значением '321'
  })
  .catch(function (err) { // err = '321'
    console.log("3", err); // выведет в консоль '3 321', вернёт промис со значением undefined
  })
  .then(function (c) { // c = undefined
    console.log("4", c); // выведет в консоль '4 undefined'
    return c; // вернёт промис со значением 'undefined'
  });

// порядок вывода в консоль: 
// 1) '1 123'
// 2) '2 123'
// 3) '3 321'
// 4) '4 undefined'

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Напишите функцию, которая будет проходить через массив целых чисел и
          выводить индекс каждого элемента с задержкой в 3 секунды. Входные
          данные: [10, 12, 15, 21]
        </h3>
        <pre className={style.codeBlock}>
          <code>
            {`
function showOutputWithDelay(arr: any[], delayInMs = 3000) {
  arr.forEach((el, i) => {
    setTimeout(() => console.log(i), delayInMs * i);
  });
}

const arr = [10, 12, 15, 21];
showOutputWithDelay(arr);

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Прочитать про Top Level Await (можно ли использовать await вне функции
          async)
        </h3>
        <div className={style.textWrap}>
          <p>
            <code>await</code> может быть использован внутри{' '}
            <code>async function</code> или на верхнем уровне модуля.
          </p>
          <pre>
            <code>{`
// async
async function f() {
  await Promise.resolve(console.log('Async - await'));
}
f(); // 'Async - await'

// top level in module
await Promise.resolve(console.log('Top Level Await')); // 'Top Level Await'
        `}</code>
          </pre>
          <p>
            Top Level Await позволяет модулям действовать как большие
            асинхронные функции: модули ECMAScript могут ожидать ресурсов,
            заставляя другие модули, которые их импортируют, ждать, прежде чем
            они начнут оценивать свое тело.
          </p>
          <div>
            <p>Варианты использования:</p>
            <ul>
              <li>
                <p>Динамический импорт</p>
                <pre>
                  <code>{`const strings = await import(\`/i18n/\${navigator.language}\`);`}</code>
                </pre>
              </li>
              <li>
                <p>Инициализация ресурсов</p>
                <pre>
                  <code>{`const connection = await dbConnector();`}</code>
                </pre>
                <p>
                  Это позволяет модулям представлять ресурсы, а также выдавать
                  ошибки в тех случаях, когда модуль невозможно использовать.
                </p>
              </li>
              <li>
                <p>Резервные варианты зависимостей</p>
                <pre>
                  <code>{`let jQuery;
try {
  jQuery = await import('https://cdn-a.example.com/jQuery');
} catch {
  jQuery = await import('https://cdn-b.example.com/jQuery');
}
        `}</code>
                </pre>
              </li>
            </ul>
          </div>
          <div>
            <p>Особенности выполнения модуля:</p>
            <ul>
              <li>
                Выполнение текущего модуля откладывается до тех пор, пока
                Promise не будет выполнен.
              </li>
              <li>
                Выполнение родительского модуля откладывается до тех пор, пока
                дочерний модуль, вызвавший await, и все его дочерние элементы не
                экспортируют привязки.
              </li>
              <li>
                Сиблинги модуля, а также сиблинги родительского модуля могут
                продолжать выполнение в том же синхронном порядке — при условии,
                что в графе нет циклов или других ожидаемых Промисов.
              </li>
              <li>
                Модуль, вызвавший <code>await</code>, возобновляет свое
                выполнение после того, как Промис будет выполнен.
              </li>
              <li>
                Родительский модуль и последующие деревья продолжают выполняться
                в синхронном порядке до тех пор, пока не будет других ожидаемых
                Промисов.
              </li>
            </ul>
          </div>
          <p>
            ❗️Циклические зависимости модулей могут привести к
            взаимоблокировке.
          </p>
        </div>
      </li>

      <li>
        <h3>
          Необходимо реализовать функцию fetchUrl, которая будет использоваться
          следующим образом: внутри fetchUrl можно использовать условный метод
          fetch, который просто возвращает Promise с содержимым страницы или
          вызывает reject
        </h3>
        <pre className={style.codeBlock}>
          <code>
            {`
/*
fetchUrl('https://google/com&#39;)
  .then(...)
  .catch(...) // сatch должен сработать только после 5 неудачных попыток получить содержимое страницы внутри fetchUrl
*/

// вариант с async-await
async function fetchUrl(url: string, tryCount = 4): Promise<any> {
  console.log('tryCouont', tryCount);
  try {
    const response = await fetch(url);
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
  } catch (err: any) {
    return tryCount > 0
      ? fetchUrl(url, tryCount - 1)
      : Promise.reject(
          \`Код ошибки: \${err?.status || 'нет данных'}. \${
            err?.message || 'Неизвестная ошибка'
          }\`
        );
  }
}

// вариант с async-await и повторной отправкой запроса в случае, если от сервера пришла ошибка
async function fetchUrl(url: string, tryCount = 4): Promise<any> {
  console.log('tryCouont', tryCount);
  try {
    const response = await fetch(url);
    const json = await response.json();

    if (response.ok) return json;

    const err: any = new Error(json.Message || '');
    err.status = response.status;
    throw err;
  } catch (err: any) {
    return tryCount > 0
      ? fetchUrl(url, tryCount - 1)
      : Promise.reject(
          \`Код ошибки: \${err?.status || 'нет данных'}. \${
            err?.message || 'Неизвестная ошибка'
          }\`
        );
  }
}

// вариант с then-catch
function fetchUrl(url: string, tryCount = 4): Promise<any> {
  console.log('tryCount', tryCount);
  return fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .catch((err) =>
      tryCount > 0
        ? fetchUrl(url, tryCount - 1)
        : Promise.reject(
            \`Код ошибки: \${err.status || 'нет данных'}. \${
              err.message || 'Неизвестная ошибка'
            }\`
          )
    );
}

const url1 = 'https://google/com&#39'; // invalid
const url2 = 'http://restapi.adequateshop.com/api/Tourist?page=1'; // valid
const url3 = 'http://restapi.adequateshop.com/api/Tourist?page'; // invalid

fetchUrl(url1)
  .then((res) => console.log('res from then ====>', res))
  .catch((err) => console.log('err after fetchUrl ====>', err));

`}
          </code>
        </pre>
      </li>
    </ol>
  );
};
