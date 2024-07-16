document.addEventListener("DOMContentLoaded", function() {
    let themeButton = document.getElementById("theme-button");
    console.log(themeButton);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
    }

    themeButton.addEventListener("click", toggleDarkMode);

  
  let signButton= document.getElementById("sign-now-button");
  let container = document.getElementById("whynot");
 
let person = {
    name: document.querySelector("#sign-petition #full-name"),
    state: document.querySelector("#sign-petition #hometown"),
    email: document.querySelector("#sign-petition #email")
};
  const addSignature = () => {
      const paragraph1 = document.createElement("p");

      paragraph1.textContent = `🖊️ ${person.name.value} from ${person.state.value} supports this cause.`;
    

    container.appendChild(paragraph1);
        
  }

  signButton.addEventListener("click",addSignature);

  const validateForm = () => {

    let containsErrors = false;

    let petitionInputs = document.getElementById("sign-petition").elements;

    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      }
      else {
        petitionInputs[i].classList.remove('error');
      }
    }
    const email = document.getElementById('email');
    if (!email.value.includes('.com')) {
       email.classList.add('error');
      containsErrors = true;
    }else {
        email.classList.remove('error');
      
    }
    console.log(containsErrors);
    if(containsErrors == false){
      addSignature();
    }
  }

  signButton.addEventListener('click', validateForm);

  let animation = {
      revealDistance: 150,
      initialOpacity: 0,
      transitionDelay: 0,
      transitionDuration: '2s',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease'
  }

  revealableContainers = document.querySelectorAll(".revealable");

  const reveal = () => {
    
    for (let i = 0; i < revealableContainers.length; i++) {
      let windowHeight = window.innerHeight;
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add("active");
      } else {
        revealableContainers[i].classList.remove("active");
      }
    }
  }
  window.addEventListener('scroll', reveal);

 
  const toggleModal = () => {
    modal = document.getElementById("thanks-modal");
    modalContent = document.getElementById("thanks-modal-content");
    modal.style.display = "flex";
    modalContent.textContent = `Thank you ${person.state.value} for your support!`;
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 4000);

    let intervalId = setInterval(scaleImage, 500);
    
  }
  signButton.addEventListener('click', toggleModal);

  let scaleFactor = 1;
  const modalImage = document.querySelector("#thanks-modal img");
  scaleImage = () =>{
    if (scaleFactor === 1){
      scaleFactor = 0.8;
    } else if(scaleFactor === 0.8){
      scaleFactor = 1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`;
  }
});

//themeButton.addEventListener("click", toggleDarkMode);