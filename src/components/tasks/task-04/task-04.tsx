import { FC } from 'react';
import style from '../tasks.module.scss';
import Link from 'next/link';

export const Task4: FC = () => {
  // создание объекта person - конструктор
  const person = new Object({
    name: 'Vasya',
    age: 23,
  });

  // создание объекта person2 - литеральный способ
  const person2 = Object.create(person, {
    name: {
      value: 'Any',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: { value: 24, enumerable: true, writable: true, configurable: true },
  });
  return (
    <ol className={style.list}>
      <li>
        <h3>Какие бывают алгоритмы сортировок?</h3>
        <div className={style.textWrap}>
          <Link
            href='https://emre.me/algorithms/sorting-algorithms/'
            target='_blank'>
            Sorting Algorithms with Animations
          </Link>
          <ul>
            <li>
              <span className={style.heading}>
                Bubble sort (Пузырьковая сортировка)
              </span>{' '}
              - асимптотика в худшем и среднем случае – O(n2), в лучшем случае –
              O(n).
            </li>
            <li>
              <span className={style.heading}>
                Selection sort (Сортировка выбором)
              </span>{' '}
              - асимптотика O(n2) в лучшем, среднем и худшем случае.
            </li>
            <li>
              <span className={style.heading}>
                Insertion sort (Сортировка вставками)
              </span>{' '}
              - асимптотика в среднем и худшем случае – O(n2), в лучшем – O(n).
            </li>
            <li>
              <span className={style.heading}>
                Merge sort (Сортировка слиянием)
              </span>{' '}
              - слияние работает за O(n), уровней всего logn, поэтому
              асимптотика O(nlogn). Эффективно заранее создать временный массив
              и передать его в качестве аргумента функции.
            </li>
            <li>
              <span className={style.heading}>
                Heap sort (Пирамидальная сортировка/Сортировка кучей)
              </span>{' '}
              - асимптотика O(nlogn) в худшем, среднем и лучшем случае.
            </li>
            <li>
              <span className={style.heading}>
                Quick sort (Быстрая сортировка)
              </span>{' '}
              - асимптотика O(nlogn) в среднем и лучшем случае, O(n2). Наихудшая
              оценка достигается при неудачном выборе опорного элемента.
            </li>
            <li>
              <span className={style.heading}>
                Shaker sort (Шейкерная сортировка)
              </span>{' '}
              - асимптотика у алгоритма такая же, как и у сортировки пузырьком,
              однако реальное время работы лучше.
            </li>
            <li>
              <span className={style.heading}>
                Comb sort (Сортировка расческой)
              </span>{' '}
              - в лучшем случае асимптотика равна O(nlogn), в худшем – O(n2).
            </li>
            <li>
              <span className={style.heading}>
                Tree sort (Сортировка деревом)
              </span>{' '}
              - асимптотика будет равна O(nlogn) в худшем, среднем и лучшем
              случае.
            </li>
            <li>
              <span className={style.heading}>
                Gnome sort (Гномья сортировка)
              </span>{' '}
              - алгоритм похож на сортировку вставками. Поддерживаем указатель
              на текущий элемент, если он больше предыдущего или он первый —
              смещаем указатель на позицию вправо, иначе меняем текущий и
              предыдущий элементы местами и смещаемся влево.
            </li>
          </ul>
        </div>
      </li>

      <li>
        <h3>{`Прочитать про "Операторы и выражения, циклы в JS"`}</h3>
        <div className={style.textWrap}>
          <ul className={style.listAsText}>
            <li>
              <p className={style.subtitle}>Операторы:</p>
              <div className={style.textBlock}>
                <p>
                  Оператор - это символы или ключевые слова, которые указывают
                  движку JavaScript на выполнение каких-либо действий.
                </p>
                <p>Оператор – это внутренняя функция JavaScript.</p>
              </div>
              <div className={style.textBlock}>
                <p>По количеству операндов:</p>
                <ul>
                  <li>
                    Унарные: <code>+</code> (приведение к числу), <code>-</code>
                    (противоположное число), <code>++</code>,{' '}
                    <code>delete</code> и др.
                  </li>
                  <li>
                    Бинарные: <code>===</code>, <code>+</code> (сложение)
                  </li>
                  <li>
                    Тернарные: <code>? :</code>
                  </li>
                </ul>
              </div>
              <div className={style.textBlock}>
                <p>По внешнему представлению:</p>
                <ul>
                  <li>
                    Символьные: <code>*</code>, <code>!</code>,{' '}
                    <code>{'>>'}</code> и т.п.
                  </li>
                  <li>
                    Текстовые: <code>delete</code>, <code>instanceof</code>,{' '}
                    <code>void</code> (определяет выражение, которое должно быть
                    вычислено без возвращения результата) и т.п.
                  </li>
                </ul>
              </div>
              <div className={style.textBlock}>
                <p>По функции:</p>
                <ul>
                  <li>
                    Присваивания: <code>=</code>, <code>+=</code>,{' '}
                    <code>%=</code>, <code>||=</code> и др.
                  </li>
                  <li>
                    Cравнения: <code>==</code>, <code>===</code>,{' '}
                    <code>!=</code>, <code>!==</code>, <code>{'>'}</code>,{' '}
                    <code>{'<'}</code>, <code>{'>='}</code>, <code>{'<='}</code>
                  </li>
                  <li>
                    Арифметические: <code>+</code>, <code>-</code>,{' '}
                    <code>*</code>, <code>/</code>, <code>%</code>,{' '}
                    <code>**</code>, <code>++</code>, <code>--</code>
                  </li>
                  <li>
                    Логические: <code>&&</code>, <code>||</code>, <code>!</code>{' '}
                    <code>??</code>
                  </li>
                  <li>
                    Строковые: бинарный <code>+</code>, <code>+=</code>,
                    операторы сравнения
                  </li>
                  <li>
                    Битовые (поразрядные): <code>~</code> (не),{' '}
                    <code>{'>>'}</code>, <code>{'<<'}</code>,{' '}
                    <code>{'>>>'}</code>, <code>&</code> (возвращает единицу в
                    каждой битовой позиции, для которой соответствующие биты
                    обеих операндов являются единицами), <code>^</code>{' '}
                    (возвращает единицу в каждой битовой позиции, для которой
                    только один из соответствующих битов операндов является
                    единицей) и др.
                  </li>
                  <li>
                    Операторы отношения: <code>in</code> (возвращает{' '}
                    <code>true</code>, если указанный объект имеет указанное
                    свойство), <code>instanceof</code> (возвращает{' '}
                    <code>true</code>, если заданный объект является объектом
                    указанного типа)
                  </li>
                  <li>
                    Удаления: <code>delete</code> (выполняет удаление объекта,
                    свойства объекта, или элемента массива с заданным индексом,
                    а так же переменных, объявленных неявно. Возвращает{' '}
                    <code>true</code> если выполнение операции возможно, иначе -{' '}
                    <code>false</code>)
                  </li>
                  <li>
                    Создания объекта: <code>new</code>
                  </li>
                  <li>
                    Группировки: <code>{'()'}</code>
                  </li>
                  <li>
                    Оператор запятая: <code>,</code> (вычисляет оба операнда и
                    возвращает значение последнего|)
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p className={style.subtitle}>Выражения:</p>
              <div className={style.textBlock}>
                <p>
                  Выражение - любой корректный блок кода, который возвращает
                  значение.
                </p>
              </div>
              <div className={style.textBlock}>
                <p>Концептуально, существуют два типа выражений:</p>
                <ul>
                  <li>
                    те которые присваивают значение переменной:{' '}
                    <code>x = 7</code>
                  </li>
                  <li>
                    те, которые вычисляют значение без его присваивания:{' '}
                    <code>3 + 4</code>
                  </li>
                </ul>
              </div>
              <div className={style.textBlock}>
                <p>Категории выражений:</p>
                <ul>
                  <li>
                    <span className={style.heading}>Арифметические</span>-
                    вычисляются в число, используют арифметические операторы.
                  </li>
                  <li>
                    <span className={style.heading}>Строковые</span>-
                    вычисляются в текстовую строку, используют строковые
                    операторы.
                  </li>
                  <li>
                    <span className={style.heading}>Логические</span>-
                    вычисляются в true или false, используют логические
                    операторы.
                  </li>
                  <li>
                    <span className={style.heading}>Основные</span>- базовые
                    ключевые слова (<code>this</code>) и основные выражения в
                    JavaScript.
                  </li>
                  <li>
                    <span className={style.heading}>Левосторонние</span>-
                    значениям слева назначаются значения справа.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p className={style.subtitle}>Циклы:</p>
              <div className={style.textBlock}>
                <p>Цикл — это повторяющаяся последовательность действий.</p>
                <p>Цикл состоит из условия и тела цикла.</p>
              </div>
              <div className={style.textBlock}>
                <ul>
                  <li>
                    <code>for</code> - для выполнения блока кода заданное
                    количество раз.
                  </li>
                  <li>
                    <code>while</code> - для выполнения блока кода пока заданное
                    условие остается истинным.
                  </li>
                  <li>
                    <code>do ... while</code> - выполнится минимум 1 раз, далее
                    выполняется, пока заданное условие остается истинным.
                  </li>
                  <li>
                    <code>for ... in</code> - для итерации свойств объекта,
                    проходит по именам свойств. В цикле будут перечислены не
                    только собственные свойства объекта, но и все перечисляемые
                    свойства из прототипа объекта и прототипа прототипа и т.д.
                  </li>
                  <li>
                    <code>for ... of</code> - для перебора итерируемых
                    сущностей, проходит по значениям свойств.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <h3>
          Создать объект Person несколькими способами, после создать объект
          Person2, чтобы в нём были доступны методы объекта Person. Добавить
          метод logInfo чтоб он был доступен всем объектам.
        </h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
// создание объекта person - литеральный способ
const person = {
  name: 'Vasya',
  age: 23,
}

// создание объекта person - конструктор
const person = new Object({
  name: 'Vasya',
  age: 23,
})

// создание объекта person - класс
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person('Vasya', 23);

// создание объекта person2 - литеральный способ
const person2 = {
  name: 'Any',
  age: 24,
  __proto__: person,
}

// создание объекта person2 - метод Object.create
const person2 = Object.create(person, {
  name: {value: 'Any', enumerable: true, writable: true, configurable: true},
  age: {value: 24, enumerable: true, writable: true, configurable: true},
});

// метод logInfo будет доступен объекту person и его наследникам
person.logInfo = function() {
  return \`Name: \${this.name}. Age: \${this.age}.\`;
}

// определение метода logInfo с помощью метода defineProperty
Object.defineProperty(person, 'logInfo', {
  value: function() {
    return \`Name: \${this.name}. Age: \${this.age}.\`;
  },
  configurable: true,
});

// метод logInfo будет доступен всем объектам
Object.prototype.logInfo = function() {
  return \`Name: \${this.name}. Age: \${this.age}.\`;
}

/* --------------- пример --------------- */
console.log(person.logInfo()); // Name: Vasya. Age: 23.
console.log(person2.logInfo()); // Name: Any. Age: 24.

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Создать класс PersonThree c get и set для поля name и конструктором,
          сделать класс наследник от класса Person.
        </h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
// вариант 1
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  logInfo() {
    return \`Name: \${this._name}. Age: \${this._age}.\`;
  }
}

class PersonThree extends Person {
  constructor(name, age) {
    super(name, age);
  }
  
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

// вариант 2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logInfo() {
    return \`Name: \${this.name}. Age: \${this.age}.\`;
  }
}

class PersonThree extends Person {
  constructor(name, age) {
    super(name, age);
  }
  
  get name() {
    return super.name;
  }

  set name(value) {
    super.name = value;
  }
}

const person3 = new PersonThree('Vasya', 20);
console.log(person3.name) // Vasya
person3.name = 'Petya'
console.log(person3.name) // Petya

`}
          </code>
        </pre>
      </li>

      <li>
        <h3>
          Написать функцию, которая вернет массив с первой парой чисел, сумма
          которых равна total. Какая сложность у вашего алгоритма?
        </h3>
        <pre className={style.codeBlock}>
          <code className='js'>
            {`
// сложность алгоритма On^2
const firstSum1 = (arr: number[], total: number) => {
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const secondNum = arr[j];
      if (firstNum + secondNum === total) return [firstNum, secondNum];
    }
  }
  return 'No such sum';
};

// сложность алгоритма On^2
const firstSum2 = (arr: number[], total: number) => {
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    const requiredNum = total - firstNum;
    if (arr.includes(requiredNum, i + 1)) return [firstNum, requiredNum];
  }
  return 'No such sum';
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum1(arr, total)); // [4, 9]

`}
          </code>
        </pre>
      </li>
    </ol>
  );
};
