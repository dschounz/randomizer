

 const language = document.querySelector('.language');
 const quote = document.querySelector('.quote');
 const country = document.querySelector('.country');

 let data = [];

 fetch('/quotes.json')
 @@ -21,7 +21,7 @@ const getQuote = function() {
     const randomQuote = data[randomNumber];

     quote.innerHTML = randomQuote.quote;
     author.innerHTML = randomQuote.author;
     // author.innerHTML = randomQuote.author;
     quote.innerHTML = randomQuote.language;
     language.innerHTML = randomQuote.quote;
     country.innerHTML = randomQuote.country;
 @@ -36,34 +36,21 @@ const getQuote = function() {
 };

 const changeColor = function() {
   const randomNumber1 = Math.floor(Math.random() * 9);
   let randomLetter1 = 'a';
   let randomLetter2 = 'b';
   let randomLetter3 = 'c';
   if (randomNumber1 < 4) {
     randomLetter1 = 'f';
     randomLetter2 = 'f';
     randomLetter3 = 'f';
   } else if (randomNumber1 >= 4 && randomNumber1 < 7) {
     randomLetter1 = 'e';
     randomLetter2 = 'e';
     randomLetter3 = 'e';
   } else {
     randomLetter1 = 'd';
     randomLetter2 = 'd';
     randomLetter3 = 'd';
   }
   console.log(randomLetter1, randomLetter2, randomLetter3);
   console.log(randomNumber1);
   const randomNumber2 = Math.floor(Math.random() * 9);
   const randomNumber3 = Math.floor(Math.random() * 9);
   body.style.backgroundColor = `#${randomLetter1}${randomNumber1}${randomLetter2}${randomNumber2}${randomLetter3}${randomNumber3}`;
   const hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   const index1 = Math.floor(Math.random() * 16);
   const index2 = Math.floor(Math.random() * 16);
   const index3 = Math.floor(Math.random() * 16);
   const index4 = Math.floor(Math.random() * 16);
   const index5 = Math.floor(Math.random() * 16);
   const index6 = Math.floor(Math.random() * 16);
   body.style.backgroundColor = `#${hex[index1]}${hex[index2]}${hex[index3]}${hex[index4]}${hex[index5]}${hex[index6]}`;
 };
