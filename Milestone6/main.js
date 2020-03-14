// function fibonacci (x) {
//     let previous = 0;
//     let previous2 = 1;
//     let y = 0;
//
//
//     for (let i = 2; i <= x; i++ ) {
//         y = previous + previous2;
//         previous = previous2;
//         previous2 = y;
//     }
//
//     return y;
// }

function Results() {

    url = 'http://localhost:5050/getFibonacciResults';
    fetch(url)
        .then((response) => response.text());
    console.log('Hello World');
}


function fiboServer() {

    let url = 'http://localhost:5050/fibonacci/';
    url = url + document.getElementById('num').value;
    // change innerText to fibonacci result ...)
    fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw response;
            }
        })
        .then(data => {
            document.getElementById('demo').innerText = data.result;
            document.getElementById('demo').style.visibility = "visible";
            document.getElementById("loader").classList.add('d-none');
            document.getElementById("alert").classList.add('d-none');
        })
        .catch(myError => myError.text())
        .then(meaningOfLife => {
            console.log(meaningOfLife);
        })
}

function calc() {
    document.getElementById("loader").classList.remove('d-none');
    let num = document.getElementById('num').value;
    if (num > 50) {
        document.getElementById("loader").classList.add('d-none');
        document.getElementById("alert").classList.remove('d-none');
    } else {
        let y = fiboServer(num);
        document.getElementById('demo').style.visibility = "hidden";
        document.getElementById('demo').innerText = y;
    }
}

document.getElementById("my_btn").addEventListener("click", calc);

