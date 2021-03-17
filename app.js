const ReqUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

const http = new XMLHttpRequest()

let main = document.getElementById('main')
let answer
http.open('GET', ReqUrl)
http.send()


http.onload = () => {
  answer = http.response
}

function getEl() {
  main.innerHTML = answer
}