const button = document.querySelector("#button");
const quote = document.querySelector("#quote");

function clickButton() {
  const apiUrl = "https://type.fit/api/quotes";
  console.log(apiUrl);
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let dataQuote = data;

      console.log(dataQuote);
      const randomQuote = Math.floor(Math.random() * dataQuote.length);
      quote.textContent = `"${dataQuote[randomQuote].text}"`;
    });
}

button.addEventListener("click", clickButton);
