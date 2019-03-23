document.addEventListener("DOMContentLoaded", function(){

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      var modals = document.querySelectorAll('.modal-show');
      for(var i = 0; i < modals.length; i++) {
        modals[i].classList.remove("modal-show");
        modals[i].classList.remove("modal-error");
      }
    }
  });

  initializeRadioInputs();

  var writeUsLink = document.querySelector(".btn-write-us-open");
  var mapLink = document.querySelector(".button-map");
  var buyProduct = document.querySelectorAll(".buy");

  assignModalOpen(writeUsLink, ".modal-write-us");
  assignFormError(".modal-write-us");

  assignModalOpen(mapLink, ".modal-map");
  assignModalProductsOpen(buyProduct, ".modal-product-added");

});

function assignModalOpen(buttonOpen, modalToOpen) {
  if(buttonOpen) {
    var popup = document.querySelector(modalToOpen);
    var modalClose = popup.querySelector(".modal-close");
    assignModalClose(modalClose, popup);

    buttonOpen.onclick = function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    };
  }
}

function assignFormError(modalWithForm) {
  var modal = document.querySelector(modalWithForm);
  if(modal) {
    var writeUsForm = modal.querySelector("form");
    var login = writeUsForm.querySelector("[name=user-name]");
    var email = writeUsForm.querySelector("[name=user-email]");
    var letter = writeUsForm.querySelector("[name=user-letter]");

    writeUsForm.addEventListener("submit", function (evt) {
      if (!login.value || !email.value || !letter.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
      }
    });
  }
}

function assignModalProductsOpen(buttonOpen, modalToOpen) {
  if(buttonOpen) {

    var popup = document.querySelector(modalToOpen);
    var modalClose = popup.querySelector(".modal-close");
    assignModalClose(modalClose, popup);

    for(var i = 0; i < buttonOpen.length; i++) {
      buttonOpen[i].onclick = function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
      };
    }
  }
}

function assignModalClose(modalClose, popup) {
  modalClose.onclick = function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  };
}

function initializeRadioInputs() {
  var radio = document.querySelectorAll("input[name=content-type]");
  var servicesSection = document.querySelector(".services");
  if(!servicesSection) {
    return;
  }
  var prev = servicesSection.querySelector("input[checked]");

  for(var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
      var prevContentElement;
      var currentContentElement;

      if(prev && this !== prev) {
        prevContentElement = document.querySelector(".services-" + prev.value);
        prevContentElement.classList.add("hidden");

        currentContentElement = document.querySelector(".services-" + this.value);
        currentContentElement.classList.remove("hidden");
        prev = this;
      }
    };
  }
}
