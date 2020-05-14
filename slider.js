let tg1 = document.getElementById('toggle-1');
let tg2 = document.getElementById('toggle-2');
let tg3 = document.getElementById('toggle-3');


tg1.onchange = function () {
    document.getElementById('slide-2').classList.remove('active');
    document.getElementById('slide-3').classList.remove('active');
    document.getElementById('slide-1').classList.add('active');

};
tg2.onchange = function () {
    document.getElementById('slide-1').classList.remove('active');
    document.getElementById('slide-3').classList.remove('active');
    document.getElementById('slide-2').classList.add('active');

};
tg3.onchange = function () {
    document.getElementById('slide-2').classList.remove('active');
    document.getElementById('slide-1').classList.remove('active');
    document.getElementById('slide-3').classList.add('active');

};

