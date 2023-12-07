// Menu data structure
let menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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


console.log(topMenuEl);
console.log(mainEl);
