// ------------------------------------------------ FUNÇÃO GERAL-------------------------  ---------- //

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


//****************FUNÇÃO OCULTAR FORMULÁRIO *****************************************/
const formSign= document.getElementById("form_sign")
const formLogin= document.getElementById("form_log")

formSign.addEventListener('click', function() {
    formLogin.classList.add("hide");
    formSign.style.display = 'visible';    
    


  });

  formLogin.addEventListener('click', function() {
    formSign.classList.add("hide");
    formLogin.style.display = 'visible';
    
    
  });







//************************************************************SIGN UP**************************************************************** */

// -------------------------------- VALIDAÇÃO USERNAME ------------------------------------- //


const nameInput = document.getElementById("name");
const nameLabel = document.getAnimations("namelabel");
const usernameError = document.getElementById("username-error");

nameInput.addEventListener("blur", (e) => {
  
  const value = e.target.value;
  
  if (value.length < 3) {
    estilizarInputIncorreto(nameInput, usernameError);
    inputsCorretos.usernameUP = false;
  } else {
    estilizarInputCorreto(nameInput, usernameError);
    inputsCorretos.usernameUp = true;
  }
});

// ---------------------------------- VALIDAÇÃO EMAIL iNSCREVER ------------------------------------- //

const emailInputIn = document.getElementById("email-Inscrever");
const emailLabelIns = document.getElementById("email-ins");
const emailHelpIns = document.getElementById("email-helper-ins");
const regexEmailIns = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

emailInputIn.addEventListener("blur", (e) => {
  const value = e.target.value;

  if (value.match(regexEmailIns)) {
    estilizarInputCorreto(emailInputIn, emailHelpIns);
    inputsCorretos.emailUp = true;
  } else {
    estilizarInputIncorreto(emailInputIn, emailHelpIns);
    inputsCorretos.emailUp = false;
  }
});

// --------------------------------- VALIDAÇÃO SENHA iNSCREVER ---------------------------------------- //

const senhaInputIns = document.getElementById("senha1");
const senhaLabelIns = document.getElementById("senha1_ins");
const senhaErrorIns = document.getElementById("senha-helper-ins");


senhaInputIns.addEventListener("blur", (e) => {
  const value = e.target.value;
  console.log(value);
  if (value.length < 8) {
    estilizarInputIncorreto(senhaInputIns, senhaErrorIns);
    inputsCorretos.senhaUp = false;
  } else {
    estilizarInputCorreto(senhaInputIns, senhaErrorIns);
    inputsCorretos.senhaUp = true;
  }
});

// ----------------------------- VALIDAÇÃO  CONFIRMAÇÃO DE  SENHA iNSCREVER -------------------------- //

const confimarSenhaInput = document.getElementById("senha2-conf");
const confirmarSenhaLabel = document.getElementById("senha_2");
const confirmarError = document.getElementById("confirma-senha");

confimarSenhaInput.addEventListener("blur", (e) => {
  const value = e.target.value;
  if (value === senhaInputIns.value) {
    estilizarInputCorreto(confimarSenhaInput, confirmarError);
    inputsCorretos.confirmarSenha = true;
  } else {
    estilizarInputIncorreto(confimarSenhaInput, confirmarError);
    inputsCorretos.confirmarSenha = false;
  }
});

// -------------------------------------- VALIDAÇÃO BUTTON INCRERVER-----------  --------------------------- //

const submitButton = document.getElementById("submitButton");

const inputsCorretos = {
  usernameUp: false,
  emailUp: false,
  senhaUP: true,
  confirmarSenha: false,
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const values = Object.values(inputsCorretos);
  console.log(values);
  const filterFalse = values.filter((value) => value === false);
  if (!filterFalse.length) {
    alert("Formulário enviado com sucesso");
    location.reload();
  } else {
    alert("Preencha todos os campos obrigatório!");
    location.reload();
  }
});


//************************************************************LOGIN**************************************************************** */

// -------------------------------------- VALIDAÇÃO EMAIL  ENTRAR  ---------------------------- //


const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("email-login");
const emailHelp = document.getElementById("email-helper");
const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

emailInput.addEventListener("blur", (e) => {
  const value = e.target.value;

  if (value.match(regexEmail)) {
    estilizarInputCorreto(emailInput,  emailHelp);
    inputsCorretos1.email1 = true;
    
  } else {
    estilizarInputIncorreto(emailInput,  emailHelp);
    inputsCorretos1.email1 = false;
  }
});











// -------------------------------- VALIDAÇÃO SENHA ENTRAR --------------------- ---------- //

const senhaInput = document.getElementById("senha");
const senhaLabel = document.getElementById("senha-Label");
const senhaError = document.getElementById("senha-error");

senhaInput.addEventListener("blur", (e) => {
  const value = e.target.value;
  console.log(value);
  if (value.length < 8) {
    estilizarInputIncorreto(senhaInput, senhaError);
    inputsCorretos1.senha1 = false;
  } else {
    estilizarInputCorreto(senhaInput, senhaError);
    inputsCorretos1.senha1= true;
  }
});















// -------------------------------------- VALIDAÇÃO BUTTON ENTRAR ----------  --------------------------- //

const submitButtonEntrar = document.getElementById("button_login_entrar");
const inputsCorretos1 = {
  email1: false,
  senha1: false,
};

submitButtonEntrar.addEventListener("click", (e) => {
  e.preventDefault();
  const values1 = Object.values(inputsCorretos1);
  console.log(values1);
  const filterFalse1 = values1.filter((value) => value === false);
  if (!filterFalse1.length) {
    alert("Formulário enviado com sucesso");
    location.reload();
  } else {
    alert("Preencha todos os campos obrigatório!");
    location.reload();
  }
});



 