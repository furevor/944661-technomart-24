document.addEventListener('DOMContentLoaded', function(){
  initializeRadioInputs();

  var writeUsLink = document.querySelector('.btn-write-us-open');
  var mapLink = document.querySelector('.button-map');

  assignModalOpen(writeUsLink, '.modal-write-us');
  assignModalOpen(mapLink, '.modal-map');

});

function assignModalOpen(buttonOpen, modalToOpen) {
  buttonOpen.onclick = function (evt) {
    evt.preventDefault();
    var popup = document.querySelector(modalToOpen);
    popup.classList.add("modal-show");
    var modalClose = popup.querySelector('.modal-close');
    assignModalClose(modalClose, popup);
  };
}

function assignModalClose(modalClose, popup) {
  modalClose.onclick = function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  };
}

function initializeRadioInputs() {
  var radio = document.querySelectorAll('input[name=content-type]');
  var prev = document.querySelector('input[checked]');

  for(var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
      var prevContentElement;
      var currentContentElement;

      if(prev) {
        prevContentElement = document.querySelector('.services-' + prev.value);
        prevContentElement.classList.add('hidden');
      }

      if(this !== prev) {
        currentContentElement = document.querySelector('.services-' + this.value);
        currentContentElement.classList.remove('hidden');
        prev = this;
      }
    };
  }
}
