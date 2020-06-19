const form = document.querySelector("form");
const inputName = document.querySelector("input[name=your-name]");
const inputEmail = document.querySelector("input[name=your-email]");
const text = document.querySelector("textarea");
const errorMessage = document.querySelector("errorMessage");

form.addEventListener("submit", e => {

    e.preventDefault();

    let errors = [];

    if (inputName.value.length <= 3) {
        errors.push("Wypełnij pole z imieniem");
    }

    if (inputEmail.value.indexOf === -1) {
        errors.push("Wypełnij pole z emailem");
    }

    if (text === "") {
        errors.push("Wypełnij pole wiadomości");
    }

    if (!errors.length) {
        e.target.submit();
    } else {
        errorMessage.innerHTML = `
        <h3 class="form-error-title">Przed wysłaniem proszę poprawić następujące błędy:</h3>
        <ul class="form-error-list">
            ${errors.map(el => `<li>${el}</li>`).join("")}
        </ul>
        `;
    }

});