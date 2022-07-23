let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")) count -= 1;
        else if(styles.contains("increase")) count += 1;
        else count = 0;

        if(count < 0) value.style.color = "red";
        else if(count > 0) value.style.color = "green";
        else value.style.color = "#222";

        value.textContent = count;
    });
})