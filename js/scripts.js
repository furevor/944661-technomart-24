document.addEventListener('DOMContentLoaded', function(){
  initializeRadioInputs();

  var writeUsLink = document.querySelector('.btn-write-us-open');
  var mapLink = document.querySelector('.button-map');
  var buyProduct = document.querySelectorAll('.buy');

  assignModalOpen(writeUsLink, '.modal-write-us');
  assignModalOpen(mapLink, '.modal-map');
  assignModalProductsOpen(buyProduct, '.modal-product-added');

});

function assignModalOpen(buttonOpen, modalToOpen) {
  if(buttonOpen) {

    var popup = document.querySelector(modalToOpen);
    var modalClose = popup.querySelector('.modal-close');
    assignModalClose(modalClose, popup);

    buttonOpen.onclick = function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    };
  }
}

function assignModalProductsOpen(buttonOpen, modalToOpen) {
  if(buttonOpen) {

    var popup = document.querySelector(modalToOpen);
    var modalClose = popup.querySelector('.modal-close');
    assignModalClose(modalClose, popup);

    buttonOpen.forEach(function (item) {
      item.onclick = function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
      };
    })
  }
}

function assignModalClose(modalClose, popup) {
  modalClose.onclick = function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  };
}

function initializeRadioInputs() {
  var radio = document.querySelectorAll('input[name=content-type]');
  var servicesSection = document.querySelector('.services');
  if(!servicesSection) {
    return;
  }
  var prev = servicesSection.querySelector('input[checked]');

  for(var i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
      var prevContentElement;
      var currentContentElement;

      if(prev && this !== prev) {
        prevContentElement = document.querySelector('.services-' + prev.value);
        prevContentElement.classList.add('hidden');

        currentContentElement = document.querySelector('.services-' + this.value);
        currentContentElement.classList.remove('hidden');
        prev = this;
      }
    };
  }
}
