const btn = document.getElementById("check-date");
const result = document.getElementById("resultado");

btn.addEventListener("click", () => {
    const fechaEl = document.getElementById("fecha");
    const mesEl = document.getElementById("mes");
    const yearEl = document.getElementById("year");

    const date = new Date(
        parseInt(yearEl.value),
        parseInt(mesEl.options[mesEl.selectedIndex].value),
        parseInt(fechaEl.value)
    );
    console.log(date);

    switch(date.getDay()) {
        case 0:
            result.innerText = "Domingo, día de descanso";
            break;
        case 6:
            result.innerText = "Sábado, día de descanso";
            break;
        case 1:
            result.innerText = "Lunes, es día laboral";
            break;
        case 2:
            result.innerText = "Martes, es día laboral";
            break;
        case 3:
            result.innerText = "Miércoles, es día laboral";
            break;
        case 4:
            result.innerText = "Jueves, es día laboral";
            break;
        case 5:
            result.innerText = "Viernes, es día laboral";
            break;
    };
})
