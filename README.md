# Игровая Платформа

Данный репозиторий был создан для работы, поддержки и развития веб-предложение под название «Игровая платформа» для сотрудников веб-студии «Oracle Digital». Веб-предложение несет себе цель, дать возможность игрокам многопользовательских компьютерных игры делать ставки, давать и выполнять задания за денежное вознаграждение.

## Детали проекта:

Frontend проекта написан на:

- **HTML**
- **CSS (SCSS)**
- **JavaScript (Native)**

## Файловая структура:

Все исходные файлы находиться в папке “#src”, которые траcпелируеться в папке “dist” с помощью Gulp. Gulp по окончанию транспеляции HTML / SCSS / JS выдаёт два файла:

- **Файлы с схожим название**
- **Файлы с окончание “.min”** - Жатый файл для прoдакшена

  Так как это многостраничный сайт, все HTML файлы находиться в папке “#src/pages” (кроме index.html). Переиспользуемые фрагменты HTML кода находиться в папке “#src/html”.
  Для каждой страницы создан свой скроим с схожим названием в папке “#src/js”. В скриптах используется импорты, Модули в папке “#src/js.modules”.
  Стили написаны с помощью SCSS. Для структурирование и нейминга классов и файлов используется методология БЭМ. Все базовые стили описаны в файле “#src/scss/base/base.scss”.
