const list = document.getElementById("drop-down-list");
const answer = document.getElementById('answer')

function open_qa(list){
    list.classList.toggle('open');
    answer.classList.toggle('open-answer');
}

function open_qao(){
    const answero = document.querySelector('.answero')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}

function open_qat(){
    const answero = document.querySelector('.answert')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}

function open_qath(){
    const answero = document.querySelector('.answerth')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}

function open_qaf(){
    const answero = document.querySelector('.answerf')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}
function open_qafi(){
    const answero = document.querySelector('.answerfi')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}

function open_qas(){
    const answero = document.querySelector('.answers')
    list.classList.toggle('open');
    answero.classList.toggle('open-answer');
}

function footerdropdown(){
    document.getElementById('dropdown').classList.toggle("footer-sub-menu");
}
function footerdropdowno(){
    document.getElementById('dropdowno').classList.toggle("footer-sub-menu");
}
function footerdropdownt(){
    document.getElementById('dropdownt').classList.toggle("footer-sub-menu");
}
function open__text(){
    document.getElementById('open-text').style.whiteSpace = 'wrap';
    document.getElementById('open-btn').style.display = 'none';
    document.getElementById('close-btn').style.display = 'block';
    document.getElementById('o-c-s').style.rotate = '180deg';
}
function close__text(){
    document.getElementById('open-text').style.whiteSpace = 'nowrap';
    document.getElementById('open-btn').style.display = 'block';
    document.getElementById('close-btn').style.display = 'none';
    document.getElementById('o-c-s').style.rotate = '360deg';
}

function open__textd(){
    document.getElementById('open-textd').style.whiteSpace = 'wrap';
    document.getElementById('open-btnd').style.display = 'none';
    document.getElementById('close-btnd').style.display = 'block';
    document.getElementById('o-c-s-d').style.rotate = '180deg';
}
function close__textd(){
    document.getElementById('open-textd').style.whiteSpace = 'nowrap';
    document.getElementById('open-btnd').style.display = 'block';
    document.getElementById('close-btnd').style.display = 'none';
    document.getElementById('o-c-s-d').style.rotate = '360deg';
}
// first_tab = document.getElementById('internal-flight');
// function nav_tabs_on(){
//     first_tab.classList.add('open-tab');
// }
// function nav_tabs_tw(){
//     ffirst_tab.classList.add('open-tab');
// }
// function nav_tabs_th(){
//     first_tab.classList.add('open-tab');
// }
// function nav_tabs_fo(){
//     first_tab.classList.add('open-tab');
// }
// function nav_tabs_fi(){
//     first_tab.classList.add('open-tab');
// }
// function nav_tabs_si(){
//     first_tab.classList.add('open-tab');
//     first_tab.contain.class
// }
// if(first_tab.classList.contains('open-tab')){
//     first_tab.classList.add('open-tab');
// }