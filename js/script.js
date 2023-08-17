let adviceId = document.getElementById("advice-id");
let advice = document.getElementById("advice");
let btn = document.getElementById("btn");

url = "https://api.adviceslip.com/advice";

const fetchAdvice = () =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // get the advice
      adviceId.innerHTML = "ADVICE #" + data.slip.id;
      advice.innerHTML = data.slip.advice;
    })
    .catch(function (error) {
      console.log(error);
    });

btn.addEventListener("click", fetchAdvice);

fetchAdvice();
