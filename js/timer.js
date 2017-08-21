let count;
let _min = o('#min');
let _sec = o('#sec');
let _min_num = _min.innerHTML;
let _sec_num = _sec.innerHTML;
let _final = false;
// Update the count down every 1 second
function Timer() {

 count = setInterval( ()=> {
   if( _sec_num == 0 ) {
     if(_min_num <= 0){
       _min.innerHTML = '00';
        _sec.innerHTML = '00';
        _final = true;
        notice();
       clearInterval(count);
     }else{
       _sec.innerHTML =  '0' +_sec_num ;
       _sec_num = 60;
       _min_num--;
       _min.innerHTML = '0' + _min_num ;
     }

   }else{
      _sec_num--;

      if(_sec_num <= 9){
        _sec.innerHTML = '0' + _sec_num;
      }else{
        _sec.innerHTML = _sec_num;
      }
      if(_min_num <= 9){
        _min.innerHTML = '0' + _min_num ;
      }else{
        _min.innerHTML = _min_num ;
      }

    }

}, 1000);

}
