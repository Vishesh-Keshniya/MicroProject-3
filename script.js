document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display input");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "DEL") {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === "RESET") {
                display.value = "0";
            } else if (buttonText === "=") {
                try {
                    display.value = eval(display.value.replace("X", "*"));
                } catch (e) {
                    display.value = "Error";
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});
