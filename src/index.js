window.onload = function() {
  if (window.devicePixelRatio && devicePixelRatio >= 2) {
    var testElem = document.createElement('div');
    testElem.style.border = '.5px solid transparent';
    document.body.appendChild(testElem);
    if (testElem.offsetHeight == 1)
    {
      document.querySelector('html').classList.add('hairlines');
    }
    document.body.removeChild(testElem);
  }

  var element1Header = document.querySelector('#element1 > .accordion_header');
  var element1Body = document.querySelector('#element1 > .accordion_body');
  var element1Text = document.querySelector('#element1 > .accordion_header > .fluid-grid > .fluid-grid__item > .text');
  var element1Subtext = document.querySelector('#element1 > .accordion_header > .fluid-grid > .fluid-grid__item > .subtext');
  var element1OpenIcon = document.querySelector('#element1 > .accordion_header > .fluid-grid > .fluid-grid__item > #chevron > .detail-open-icon');
  var element1CloseIcon = document.querySelector('#element1 > .accordion_header > .fluid-grid > .fluid-grid__item > #chevron > .detail-close-icon');

  var element2Header = document.querySelector('#element2 > .accordion_header');
  var element2Body = document.querySelector('#element2 > .accordion_body');
  var element2Text = document.querySelector('#element2 > .accordion_header > .fluid-grid > .fluid-grid__item > .text');
  var element2Subtext = document.querySelector('#element2 > .accordion_header > .fluid-grid > .fluid-grid__item > .subtext');
  var element2OpenIcon = document.querySelector('#element2 > .accordion_header > .fluid-grid > .fluid-grid__item > #chevron > .detail-open-icon');
  var element2CloseIcon = document.querySelector('#element2 > .accordion_header > .fluid-grid > .fluid-grid__item > #chevron > .detail-close-icon');

  element1Header.addEventListener('click', function(e){
    if (element1Body.classList.contains('accordion_body__show')) {
      element1Body.classList.remove('accordion_body__show');
      element1Text.classList.remove('text__selected');
      element1Subtext.classList.remove('subtext__selected');
      element1CloseIcon.classList.add('detail-icon--hidden');
      element1OpenIcon.classList.remove('detail-icon--hidden');
      return;
    }
    element1Text.classList.add('text__selected');
    element1Subtext.classList.add('subtext__selected');
    element1Body.classList.add('accordion_body__show');
    element1CloseIcon.classList.remove('detail-icon--hidden');
    element1OpenIcon.classList.add('detail-icon--hidden');

    element2Text.classList.remove('text__selected');
    element2Subtext.classList.remove('subtext__selected');
    element2Body.classList.remove('accordion_body__show');
    element2OpenIcon.classList.remove('detail-icon--hidden');
    element2CloseIcon.classList.add('detail-icon--hidden');
  });

  element2Header.addEventListener('click', function(e){
    if (element2Body.classList.contains('accordion_body__show')) {
      element2Body.classList.remove('accordion_body__show');
      element2Text.classList.remove('text__selected');
      element2Subtext.classList.remove('subtext__selected');
      element2CloseIcon.classList.add('detail-icon--hidden');
      element2OpenIcon.classList.remove('detail-icon--hidden');
      return;
    }

    element2Text.classList.add('text__selected');
    element2Subtext.classList.add('subtext__selected');
    element2Body.classList.add('accordion_body__show');
    element2CloseIcon.classList.remove('detail-icon--hidden');
    element2OpenIcon.classList.add('detail-icon--hidden');

    element1Text.classList.remove('text__selected');
    element1Subtext.classList.remove('subtext__selected');
    element1Body.classList.remove('accordion_body__show');
    element1OpenIcon.classList.remove('detail-icon--hidden');
    element1CloseIcon.classList.add('detail-icon--hidden');
  });
}
