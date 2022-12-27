function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <=17) {
        greeting = 'Здавствуй, ';
        if(userSex == 'female') {
            greeting +='девочка ';
        }
        else {
            greeting +='мальчик';
        }
    }
    else {
        greeting = 'Здравстуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + '' + userSurname + '\n' + 'Ваш возраст: ' + userAge) 
    let r = Math.round(Math.rendom()*255);
    let g = Math.round(Math.rendom()*255);
    let b = Math.round(Math.rendom()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount; i++) {
        stairs.innerHTML +='<div class="step"</div>';
    }

    let steps = document.querySelectorAll('.step');
    for(let i = 0; i<steps.length; i++) {
        steps[i].style.left = (30 + 10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер ' + i;
    }
}
function snowflake() {
    let snowflake = document.querySelector('#snowflake');
    let snowflakeCount = 100;
    for (let i = 0; i<snowflakeCount; i++) {
        snowflake.innerHTML += '<img class="sneg" src="sneg.png"></img>'
    }
    let sneg = document.querySelectorAll('.sneg');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    
    for (let i = 0; i<sneg.length; i++) {
        sneg[i].style.left = Math.random() * (screenWidth) + 'px';
        sneg[i].style.top = Math.random() * (screenHeight) + 'px';
        sneg[i].style.width = Math.random() * 100 + 'px';
    }
}

function makeStih(){
    let steps = document.querySelectorAll('.stih');
    for (let i = 0; i<steps.length; i++) {
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        steps[i].style.color = 'rgb(' + r + ',' + g + ',' + b +')';
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        steps[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
        steps[i].style.fontSize = (i + 20)+'px';
        steps[i].style.width = (i * 20 + 300)+'px';
    }
}

function All() {
    makeStairs();
    snowflake();
    makeStih()
}