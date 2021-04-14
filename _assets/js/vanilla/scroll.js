function scrollToTop(){
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

let scrollPos = 0;
const nav = document.querySelector('.scroll-top');

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // scrolling up
        nav.classList.remove('is-hidden');
    } else {
        // scrolling down
        nav.classList.add('is-hidden');
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', debounce(checkPosition));