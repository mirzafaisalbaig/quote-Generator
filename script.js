// write your JavaScript here
const   text = document.querySelector(".quote");
const  author = document.querySelector(".author");
const nextBtn = document.querySelector(".next");
const tweetBtn = document.querySelector(".twitter-share-button");

const getQuote = async () =>{
 const  data =await fetch('https://type.fit/api/quotes');
 const quotes = await data.json();

 const randomQuote =Math.floor (Math.random()*quotes.length);
 const item = quotes[randomQuote];
 
const  quote = item.text;
 text.innerText =  quote;

const authorName = item.author;
author.innerText = authorName;

tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`

}

nextBtn.addEventListener("click", getQuote)

getQuote()