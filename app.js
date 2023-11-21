
// Select the one lonely h1 tag
const nameTag = document.querySelector("h1");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

nameTag.onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {

        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if (index < iterations) {
                return nameTag.dataset.value[index];
            }
            return alphabet[Math.floor(Math.random() * 26)]
        })
        .join("")

        if (iterations >= nameTag.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 30);
}