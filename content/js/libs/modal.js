/*
  Modal Overlay - http://codepen.io/scottohara/pen/lIdfv
*/

// helper function to place modal window as the first child
// of the #page node
var m = document.getElementById('modal_window'),
    mv = document.getElementById('modal_video_window'),
    p = document.getElementById('outer-wrap');

function swap (el) {
  p.parentNode.insertBefore(el, p);
}

swap(m);
if(!!mv){
    swap(mv);
}


// modal window
(function() {

  'use strict';

  // list out the vars
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'),
      mVOverlay = getId('modal_video_window'),
      mVOpen = document.querySelector('.btn[title="Discover the Digital Guidelines"]'),
      mVClose = getId('modal_video_close'),
      modalV = getId('modal_video_holder'),
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i;


  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id);
  }


  // Let's open the modal
  function modalShow (event) {
      var currOverlay = mOverlay,
          currModal = modal,
          focusableEl = 'input';
    event.preventDefault();
    event.stopPropagation();
    lastFocus = document.activeElement;
      
    if(event.target.className.indexOf('search-link') < 0){
        currOverlay = mVOverlay;
        currModal = modalV;
        focusableEl = 'video';
    }
    currOverlay.setAttribute('aria-hidden', 'false');
    modalOpen = focusableEl;
    currModal.setAttribute('tabindex', '0');
    currModal.querySelector(focusableEl).focus();
  }
    


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function modalClose (event) {
      var currOverlay = mOverlay,
          currModal = modal,
          focusableEl = 'input';
      
    if (!!modalOpen && ( !event.keyCode || event.keyCode === 27) ) {
        if(modalOpen === 'video'){

            currOverlay = mVOverlay;
            currModal = modalV;
        }
      currOverlay.setAttribute('aria-hidden', 'true');
      currModal.setAttribute('tabindex', '-1');
      modalOpen = false;
      lastFocus.focus();
    }
  }


  // Restrict focus to the modal window when it's open.
  // Tabbing will just loop through the whole modal.
  // Shift + Tab will allow backup to the top of the modal,
  // and then stop.
  function focusRestrict ( event ) {
      var curModal = modalOpen === 'video' ? modalV : modal;
    if (!!modalOpen && !curModal.contains( event.target ) ) {
      event.stopPropagation();
      curModal.focus();
    }
  }


  // Close modal window by clicking on the overlay
  mOverlay.addEventListener('click', function( e ) {
    if (e.target == modal.parentNode) {
       modalClose( e );
     }
  }, false);

if(!!mv){
    // Close modal window by clicking on the overlay
      mVOverlay.addEventListener('click', function( e ) {
        if (e.target == modalV.parentNode) {
           modalClose( e );
         }
      }, false);
    }

  // open modal by btn click/hit
  mOpen.addEventListener('click', modalShow);
    
if(!!mv){
  mVOpen.addEventListener('click', modalShow);
}
    
  // close modal by btn click/hit
  mClose.addEventListener('click', modalClose);

if(!!mv){
  mVClose.addEventListener('click', modalClose);
}

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', modalClose);

  // restrict tab focus on elements only inside modal window
  for (i = 0; i < allNodes.length; i++) {
    allNodes.item(i).addEventListener('focus', focusRestrict);
  }

})();