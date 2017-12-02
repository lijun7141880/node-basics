/**
 * Created by ponovo on 2017/11/28.
 */
function clickIt(e){
    window.alert('Button is clicked');
}

var button = document.getElementById('#button');
    button.addEventListener('click',clickIt);

//EventEmitter