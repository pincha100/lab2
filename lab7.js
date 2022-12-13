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
        if(userSex == '')
    }
    alert(greeting + userName + '' + userSurname + '\n' + 'Ваш возраст: ' +userAge) 
    let r = Math.round(Math.rendom()*255);
    let g = Math.round(Math.rendom()*255);
    let b = Math.round(Math.rendom()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}