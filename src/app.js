const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
  // // do something...
  const text = textParagraph.textContent;

  if (navigator.clipboard) {
    // /**checking for feature availability */
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Please copy manually");
  }
});
