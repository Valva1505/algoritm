const suicid = document.querySelector(".form__input_type_suicid");
const oascl = document.querySelector(".form__input_type_oascl");
const complance = document.querySelector(".form__input_type_complance");
const mspss = document.querySelector(".form__input_type_mspss");
const ismi = document.querySelector(".form__input_type_ismi");
const recommendations = document.querySelector(".recommendations");
const submit = document.querySelector(".form__button-submit");

function result(evt) {
    evt.preventDefault();
    if (suicid.checked) {
    recommendations.textContent = "госпитализация в круглосуточный стационар";
  } else if (oascl.value <= 5 && complance.value > 30 && mspss.value > 6 && ismi.value < 2.5) {
    recommendations.textContent = "госпитализация в дневной стационар";
  } else {
    recommendations.textContent = "госпитализация в ОИОПП";
  } 
}

submit.addEventListener("click", result);
