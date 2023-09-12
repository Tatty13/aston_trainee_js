'use client';

import { FC, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import javascript from 'highlight.js/lib/languages/javascript';

import style from './task.module.scss';

export const Task1: FC = () => {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll();
  }, []);

  return (
    <ol className={style.list}>
      <li>
        <h3>
          Подробно прочитать про метод запроса OPTIONS и кратко его описать:
          когда вызывается, где используется, что передает и принимает.
        </h3>
        <div className={style.textWrap}>
          <p>
            HTTP-метод <code>OPTIONS</code> позволяет клиенту определять опции и
            требования, связанные с ресурсом, или возможностями сервера, но не
            производя никаких действий над ресурсом и не инициируя его загрузку.
          </p>
          <div>
            <p>Основные характеристики:</p>
            <ul>
              <li>безопасный</li>
              <li>идемпотентный</li>
              <li>некешируемый</li>
              <li>запрос не имеет тела</li>
              <li>успешный ответ имеет тело</li>
            </ul>
          </div>
          <p>
            Использается в качестве предварительного запроса (CORS), помогая
            браузеру узнать, можно ли осуществить запрос до его обработки.
          </p>
          <div>
            <p>
              В дополнение к заголовкам из простых CORS-запросов (
              <code>Origin</code> и <code>Access-Control-Allow-Origin</code>) в
              предварительных запросах браузер прикладывает такие:
            </p>
            <ul>
              <li>
                <code>Access-Control-Request-Method</code> — указывает метод
                исходного запроса.
              </li>
              <li>
                <code>Access-Control-Request-Headers</code> — содержит список
                «небезопасных» заголовков основного запроса, перечисленных через
                запятую.
              </li>
            </ul>
          </div>
          <div>
            <p>Cервер отвечает с использованием заголовков:</p>
            <ul>
              <li>
                <code>Access-Control-Allow-Method</code> — возвращает методы
                запроса, разрешённые для данного URL.
              </li>
              <li>
                <code>Access-Control-Allow-Headers</code> — возвращает список
                «небезопасных» заголовков, разрешённых для данного
                кросс-доменного запроса. Если их несколько, они перечисляются
                через запятую.
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <h3>{`Прочитать и описать ключевые особенности "HTTP" Версии 3.0`}</h3>
        <div className={style.textWrap}>
          <div>
            <p>
              Основные особенности вытекают из перехода с протокала TCP на QUIC
              (Quick UDP Internet Connection):
            </p>
            <ul>
              <li>
                Иначе реализовано мультиплексирование (запросы/ответы передаются
                параллельно), благодаря чему потеря части пакета не приводит к
                задержке передачи данных.
              </li>
              <li>Сжатие заголовков осуществляется с помощью QPACK.</li>
              <li>
                QUIC безопасен по умолчанию, что делает соединению всегда
                шифрованным, а также позволяет быстрее делать первоначальное
                соединение (вместо трёхстороннего рукопожатия TCP и TLS -
                трёхстороннее рукопожатие только QUIC).
              </li>
              <li>
                При разрыве соединения не нужно устанавливать новое, то есть не
                будет повторных рукопожатий, так как используется уникальный
                идентификатор соединения.
              </li>
              <li>QUIC также шифрует метаданные о соединении.</li>
              <li>
                Добавлен механизм миграции соединения (позволяет поддерживать
                активное соединение, даже если меняется сеть или IP-адрес
                устройства)
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <h3>{`Прочитать про способы отмены запроса, включая объект "AbortController"`}</h3>
        <div className={style.textWrap}>
          <p>
            AbortController - интерфейс, позволяющий оборвать один и более
            запросов. Свойство <code>signal</code> передаётся в fetch, метод
            <code>abort()</code> прерывает запрос.
          </p>

          <div>
            <p>В Axios нужно сгенерировать токен отмены:</p>
            <code>
              const cancelToken = axios.CancelToken; const source =
              cancelToken.source();
            </code>
            <p>Этот источник затем передается в запрос axios:</p>
            <code>{`const { data } = await instance.get("/", {
              cancelToken: source.token,
            });`}</code>
            <p>
              Источник содержит метод cancel, который можно вызвать для отмены
              запроса:
            </p>
            <code>{`source.cancel("axios request cancelled");`}</code>
          </div>

          <div>
            <p>Метод abort() в XMLHttpRequest:</p>
            <code>
              const xhr = new XMLHttpRequest(); xhr.send(); xhr.abort();
            </code>
          </div>

          <div>
            <p>
              Если используется WebSocket, то можно закрыть соединение методом
              close():
            </p>
            <code>{`const socket = new WebSocket('url'); socket.close();`}</code>
          </div>
        </div>
      </li>

      <li>
        <h3>{`Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать): string, number, boolean, null, undefined, symbol, bigInt`}</h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
const num1 = 1; // 1
const num2 = Number(2); // 2

const str1 = 'string'; // 'string'
const str2 = String(2); // '2'

const boolean1 = true; // true
const boolean2 = Boolean('') // false

const null1 = null // null

const undefined1 = undefined; // undefined
let undefined2; // undefined

const bigInt = 10n // 10n
const bigInt2 = BigInt(10) // 10n

const symbol1 = Symbol('check') // Symbol('check')
`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Почему, если обратиться к переменным созданным через let/const до их
          объявления, мы получаем ReferenceError?
        </h3>
        <div className={style.textWrap}>
          <p>
            Потому что во время инициализации они попадают во временную мёртвую
            зону и не видны интерпретатору до их объявления.
          </p>
        </div>
      </li>

      <li>
        <h3>Решить:</h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`const res = "B" + "a" + (1 - "hello"); console.log(res); //'BaNaN'`}
          </code>
          <code className='js'>
            {`const res2 = (true && 3) + "d"; console.log(res2); //'3d'`}
          </code>
          <code className='js'>
            {`const res3 = Boolean(true && 3) + "d"; console.log(res3); //'trued'`}
          </code>
        </pre>
      </li>
    </ol>
  );
};
