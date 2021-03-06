$(document).ready(getRandomQuote);

let quotes = ["“You only live once, but if you do it right, once is enough.”", "“Be yourself; everyone else is already taken.”", "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", "“Be the change that you wish to see in the world.”", "“So many books, so little time.”", "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", "“In three words I can sum up everything I've learned about life: it goes on.”"];

let authors = ["-Mae West", "-Oscar Wilde", "-Albert Einstein", "-Mahatma Gandhi", "-Frank Zappa", "-Dr. Seuss", "-Robert Frost"];

let colors = ["#79d42f", "#8d5cdb", "#e65ecf", "#e6dc5e", "#5ee6dc", "#5ea0e6"];

function getRandomQuote() {

  let randomNumber = Math.floor(Math.random() * 6 + 1);
  document.getElementById('text').innerHTML = quotes[randomNumber];
  document.getElementById('author').innerHTML = authors[randomNumber];
  document.getElementById('body').style.backgroundColor = colors[randomNumber];
  document.getElementById('text').style.color = colors[randomNumber];
  document.getElementById('author').style.color = colors[randomNumber];
  document.getElementById('new-quote').style.backgroundColor = colors[randomNumber];
  document.getElementById('new-quote').style.color = '#ffffff';
  document.getElementById('twitter-icon').style.color = colors[randomNumber];

}

function getNewQuote() {

  $('body').fadeIn();

  let presentQuote = document.getElementById('text');
  let presentAuthor = document.getElementById('author');

  let pos;

  while (true) {
    let rand = Math.floor(Math.random() * 6 + 1);
    if (authors[rand - 1] != presentAuthor.innerHTML) {
      document.getElementById('text').innerHTML = quotes[rand - 1];
      document.getElementById('author').innerHTML = authors[rand - 1];
      document.getElementById('text').style.color = colors[rand - 1];
      document.getElementById('author').style.color = colors[rand - 1];
      document.getElementById('new-quote').style.backgroundColor = colors[rand - 1];
      document.getElementById('new-quote').style.color = '#ffffff';
      document.getElementById('body').style.backgroundColor = colors[rand - 1];
      document.getElementById('twitter-icon').style.color = colors[rand - 1];
      break;
    }
  }

}