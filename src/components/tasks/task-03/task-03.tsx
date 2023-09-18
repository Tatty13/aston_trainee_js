import { FC } from 'react';
import style from '../tasks.module.scss';

export const Task3: FC = () => {
  return (
    <ol className={style.list}>
      <li>
        <h3>{`Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?`}</h3>
      </li>
      <div className={style.textWrap}>
        <div>
          <p>Массивы совмещают в себе следующие структуры данных:</p>
          <ul>
            <li>Стэк</li>
            <li>Очередь</li>
            <li>Двустроннюю очередь</li>
            <li>Упорядоченный список</li>
          </ul>
        </div>
        <p>
          Массив в JS гетерогенный (может хранить в себе данные разных типов) и
          динамический (позволяет изменять длину массива). Реализован как
          частный случай хэш-таблиц.
        </p>
      </div>
      <li>
        <h3>
          Привязать контекст объекта к функции logger, чтобы при вызове
          this.item выводило - some value (Привязать через bind, call, apply)
        </h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
function logger() {
 console.log('I output only external context: ' + this.item);
}

const obj = { item: "some value" };

logger.call(obj);

logger.apply(obj);

const boundLogger = logger.bind(obj);
boundLogger();

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Реализовать полифил (собственную функцию реализующую встроенную в js)
          метода bind()
        </h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
declare global {
  interface Function {
    customBind(ctx: any, args?: any[]): Function;
  }
}

Function.prototype.customBind = function(ctx) {
  const targetFunc = this;
  const args = Array.from(arguments).slice(1);
 
  return function() {
    return targetFunc.apply(ctx, args);
  }
}

Function.prototype.customBind2 = function(ctx, ...args) { 
  return () => this.apply(ctx, args || []);
}

`}
          </code>
        </pre>
      </li>
    </ol>
  );
};
