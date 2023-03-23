"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/

const superDropEl = document.querySelectorAll(".dropdown-item");
superDropEl.forEach((element) => {
  element.classList.add("super-dropdown");
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/

const btnEl= document.querySelector(".btn");
btnEl.classList.toggle("btn-secondary");

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
const ddmEl= document.querySelector(".menu");
ddmEl.classList.remove("dropdown-menu");


/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
const ddEl= document.querySelector(".dropdown");
ddEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');


/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
const ddmbEl= document.getElementById("dropdownMenuButton");
ddmbEl.id= "superDropdown";

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

const dataEl= document.querySelector('[aria-labelledby="dropdownMenuButton"]');
dataEl.dataset.add ="3";

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

const typeEl= document.querySelector(".dropdown-toggle");
typeEl.removeAttribute("type");