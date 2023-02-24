/*****************funcões geral******************************** */

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  
/*************************CONTATOS******************************************* */
// -------------------------------- VALIDAÇÃO USERNAME --------------------- ---------- //

const nameInputCont = document.getElementById("name-contatos");
const usernameCont = document.getElementById("username-error-contatos");
console.log (nameInputCont)

nameInputCont.addEventListener("blur", (e) =>{
  console.log(nameInputCont)
  const contato = e.target.value;
  console.log(contato);
  if (contato.length < 3) {
    estilizarInputIncorreto(nameInputCont,usernameCont  );
    inputsCorretos2.name2 = false;
  } else {
    estilizarInputCorreto(nameInputCont,usernameCont );
    inputsCorretos2.name2 = true;
  }
});

// -------------------------------- VALIDAÇÃO EMAIL --------------------- ---------- //

const emailInputCo = document.getElementById("email-contatos");
const emailHelpCon = document.getElementById("email-helper-cont");
const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

emailInputCo.addEventListener("blur", (e) => {
  const value = e.target.value;
  console.log
  if (value.match(regexEmail)) {
    estilizarInputCorreto(emailInputCo, emailHelpCon);
    inputsCorretos2.email2 = true;
  } else {
    estilizarInputIncorreto(emailInputCo, emailHelpCon);
    inputsCorretos2.email2 = false;
  }
});


// -------------------------------- VALIDAÇÃO ASSUNTO --------------------- ---------- //
const assuntoInput = document.getElementById("assunto");
const assuntoHelp = document.getElementById("assunt-helper-cont");


assuntoInput .addEventListener("blur", (e) => {
  const value = e.target.value;
  console.log
  if (value.length === 0) {
    estilizarInputIncorreto(assuntoInput, assuntoHelp);
    console.log(value)
    inputsCorretos2.assunto2 = false;
  } else {
    estilizarInputCorreto(assuntoInput, assuntoHelp);
    inputsCorretos2.assunto2 = true;
  }
});

// -------------------------------- VALIDAÇÃO MSG --------------------- ---------- //
const msgInput = document.getElementById("msg");
const msgHelp = document.getElementById("msg-helper-cont");


msgInput.addEventListener("blur", (e) => {
  const value = e.target.value;
  console.log
  if (value.length === 0) {
    estilizarInputIncorreto(msgInput, msgHelp);
    console.log(value)
    inputsCorretos2.msg2= false;
  } else {
    estilizarInputCorreto(msgInput, msgHelp);
    inputsCorretos2.msg2 = true;
  }
});


// -------------------------------- VALIDAÇÃO FORMULARIO CONTATOS  --------------------- ---------- //

const submitButtonEnviar = document.getElementById("button_enviar");
const inputsCorretos2 = {
  email2: false,
  name2: false,
  assunto2:false,
  msg2:false,
};

submitButtonEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const values2 = Object.values(inputsCorretos2);
  console.log(values2);
  const filterFalse2 = values2.filter((value) => value === false);
  if (!filterFalse2.length) {
    alert("Formulário enviado com sucesso");
    location.reload();
  } else {
    alert("Preencha todos os campos obrigatório!");
    location.reload();
  }
});
