// Create Selector
let o = element => document.querySelector(element);
let All = element => document.querySelectorAll(element);
// Declare Variables
let _strings = ['DOG' , 'BOOK' , 'BAG' , 'SHOP' , 'APPLE' , 'HOUSE' , 'LIBRARY' , 'OFFICE'];
let random = Math.floor(Math.random() * 8);
let _string_array = _strings[random].split('')
let _word = new RegExp(`[${_strings[random]}]`);
let _words_box = o('._words');
let _wrong_words_box = o('._wrong_words');
let _btn = All('._btn');
let start_btn = o('.start_btn');
let _word_html = `<div class="_line"><span class="_textvalue"></span><div></div>`;
let _correct_counter = 0;
let _wrong_counter = 0;

// append default html
_string_array.forEach( ( value, index ) => {
  _words_box.innerHTML += _word_html;
});

// Fire Timer
start_btn.onclick = () => {
  o('._start').style.display = 'none';
  Timer();
}

// Click On Number Buttons
_btn.forEach( ( value, index ) => {
  value.onclick = function() {

    this.setAttribute('disabled', true);
    this.classList.add('_disable');

    // Wrong Word
    if ( _word.test(this.textContent) == false ) {
      o('._wrong_words ._words_title').classList.add('words-padding');
      iterator.next();
      _wrong_words_box.innerHTML +=
        `<div class="_line"><span class="_textvalue">${this.textContent}</span><div></div>`;

      _wrong_counter++;
    }
    // Correct Word
    else {
      _string_array.forEach((value, index) => {
        o('._words ._words_title').classList.add('words-padding');
        if (this.textContent == value) {
          All('._words ._textvalue')[index].classList.add('_textvalue-padding')
          All('._words ._textvalue')[index].innerHTML = this.textContent;

          _correct_counter++;
        }
      });
    }
    // Fire notice Function
    notice();
  }
});

// Notice Winner Or Looser
function notice() {
  if (end || _final || _wrong_counter == 11) {
    alert(`You Loose , Answer Is : ${_strings[random]}`);
    location.reload();
  }
  if (_correct_counter == _string_array.length) {
    alert(`You Win ..., Answer Is : ${_strings[random]}`);
    location.reload();
  }
}
