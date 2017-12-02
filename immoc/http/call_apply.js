/**
 * Created by ponovo on 2017/11/28.
 */
var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words)
    }
};

//pet.speak('Speak');

var dog = {
    words: 'Wang'
};

pet.speak.call(dog, 'Speak');