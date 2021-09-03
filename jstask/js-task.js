let btn = document.getElementById('strt');
let div = document.getElementById('para');
let num = [Math.floor(Math.random() * 100)];
let btn2 = document.getElementById("ent");
let c = 0
let end = 30

function start() {
    c += 1

    if (div.innerText < 30) {
        btn.disabled = true;
        btn.style.backgroundColor = 'Aqua'
        ts.innerHTML = ""
        output.style.top = "54%";
        output.style.left = "46%";
        if (end - c >= 0) {
            div.innerText = end - c
            btn2.addEventListener('click', function() {
                let input = document.getElementById('userinput').value;

                if (input == num) {
                    output.innerHTML = `You guessed right,the number is ${num}`
                    output.style.color = "aqua";

                } else if (input > num) {
                    output.innerHTML = "You guessed a larger number"
                    output.style.color = "aqua";

                } else {
                    output.innerHTML = "You guessed a smaller number"
                    output.style.color = "aqua";

                }
            })
        }

        if (end - c == 0) {
            div.innerText = 0;
            alert("Times Up")
            btn2.disabled = true;
            return 0;

        }

    }





}
if (c == 0) {
    ts.innerHTML = "Click the start button"
}


function strt() {
    setInterval(start, 1000)
}