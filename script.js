// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Part 1.1
const mainEl = document.querySelector("main");
// const mainEl = document.getElementsByTagName("main")


// Part 1.2
mainEl.style.backgroundColor = 'var(--main-bg)';

// Part 1.3
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Part 1.4
mainEl.classList.add('flex-ctr');


// Part 2.1
const topMenuEl = document.getElementById("top-menu");
// const topMenuEl = document.querySelector("#top-menu");

// Part 2.2
topMenuEl.style.height = "100%";


// Part 2.3
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'


// Part 2.4
topMenuEl.classList.add("flex-around");


// Part 3.1
menuLinks.forEach(function(link) {
  const newEl = document.createElement("a");
  newEl.setAttribute("href", link.href);
  newEl.textContent = link.text;
  topMenuEl.appendChild(newEl);
});


// DOM manipulation part two

// Part 3.1
const subMenuEl = document.querySelector("#sub-menu");

// Part 3.2
subMenuEl.style.height = "100%";

// Part 3.3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Part 3.4
subMenuEl.classList.add("flex-around");

// Part 3.5
subMenuEl.style.position = "absolute";

// Part 3.6
subMenuEl.style.top = "0";


// Part 4.1

topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName === "A") {
     console.log(event.target.textContent);
      event.target.classList.toggle("active");
      document.querySelectorAll(".menu-Links").forEach(function(link) {
        event.target.classList.remove("active");
      });
      }
      subMenuEl.innerHTML = "";
      const linkObj = menuLinks.find(link => link.text.toLocaleLowerCase() === event.target.textContent.toLocaleLowerCase());
      if (linkObj && linkObj.subLinks) {
        subMenuEl.style.top = "100%" 
        linkObj.subLinks.forEach(function(subLink) {
          const subEL = document.createElement("a");
          subEL.setAttribute("href", subLink.href);
          subEL.textContent = subLink.text;
          subMenuEl.appendChild(subEL);
        });
      } else {
        subMenuEl.style.top = "0";
        }
        subMenuEl.addEventListener('click', function(evt) {
          evt.preventDefault();
          if (evt.target.tagName !== "A") {
            return;
          }
            });
          });



console.log(subMenuEl);
console.log(topMenuEl);
console.log(mainEl);
