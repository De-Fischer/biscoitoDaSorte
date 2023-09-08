const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector('#btnReset')
const vibrate = document.querySelector('.vibrate')
const scale = document.querySelector('.scale')
const msg = [ 
  {
    mensagem: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  },
  {
    mensagem: "Não há paixão em jogar pequeno – em se contentar com uma vida que é menos do que você é capaz de viver."
  },
  {
    mensagem: "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez"
  },
  {
    mensagem: "Sempre que se deparar com um obstáculo, encare-o como uma oportunidade."
  },
  {
    mensagem: "Você só deve tentar ser melhor do que uma pessoa: quem você era ontem."
  },
  {
    mensagem: "Foque em ser produtivo, e não em ser ocupado."
  },
  {
    mensagem: "Se você cansar, aprenda a descansar e não a desistir."
  },
  {
    mensagem: "O sucesso não vai simplesmente te encontrar. Você precisa sair da zona de conforto e ir atrás dele."
  },
  {
    mensagem: "O sucesso é feito de avanços e retrocessos contínuos. É uma caminhada, não um destino."
  },
  {
    mensagem: "Existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer."
  }
];

function handleTryClick() {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
  raffleMessage()
}
vibrate.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', function(){
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
})


//função para alternar entre as mensagens e colocar no 'scale' pegando do array
function raffleMessage(){
  const randomNumber = Math.floor(Math.random() * msg.length)
  scale.innerText = msg[randomNumber].mensagem
}
