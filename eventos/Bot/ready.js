/*
  O evento "ready" é o evento que é ativado quando o bot é ligado.
*/

module.exports = async (client) => { // NOTA: Todos os eventos necessitam de passar o parâmetro "client" antes de passar os outros parâmetros, caso existam.
  //array de objetos com os status
const status = [
  {
    type: 'PLAYING',
    message: 'Discloudbot.com'
  },
],
  randomStatus = status[Math.floor(Math.random() * status.length)]; //pegando um index aleatorio da array de objetos

setInterval(() => {//função que ira trocar o status do bot a cada 30s
  client.user.setActivity(randomStatus.message, { type: randomStatus.type });
}, 30000); //1s = 1000ms 30000 = 30s;
console.log(`\nO bot ${client.user.tag} foi ligado com sucesso!\n`)
}
