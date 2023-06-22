// var axios = require('axios');
        
axios ({
    method: 'get',
    url: '/students',
    responseType: 'JSON'
}).then(function (response) {
    // axios는 JSON으로 반환 -> 객체로 변환
    console.log(JSON.parse(response.data));
    var data = JSON.parse(response.data);

    data.forEach(element => {
        // document.write(element.id);
        const temp = document.createElement("div");
        temp.innerHTML = `<p>${element.id} : ${element.name} _ ${element.password} _ ${element.email} _ ${element.gender}</p>`;
        document.querySelector('body').append(temp);
    });
}) 