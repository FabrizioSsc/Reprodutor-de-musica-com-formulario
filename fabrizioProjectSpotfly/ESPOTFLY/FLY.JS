
let musicas = [
    {titulo:'Eternal Youth', artista:'Rude', src:'MUSICAS/Eternal Youth.mp3',img:'imagens/eternal youth.jpg'},
    {titulo:'Love Is a long road', artista:'Barthic House Orchestra', src:'MUSICAS/Love Is A Long Road.mp3',img:'imagens/Love is a Long Road .jpg'},
    {titulo:'megalovania', artista:'Toby Fox', src:'MUSICAS/megalovania.mp3',img:'imagens/megalovania.png'}

]




let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

function duration (){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration))
} 

//duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

//eventos
document.querySelector('.play').addEventListener('click', tocarMusica)

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () =>{ 
    indexMusica--                                                                   
    renderizarMusica(indexMusica)

})

document.querySelector('.proxima').addEventListener('click', () =>{       //funcao anonima
    renderizarMusica(indexMusica)
    indexMusica++  
})

//Funcoes

function renderizarMusica (index){ //index é um parametro
    musica.setAttribute('src',musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src =  musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration))
    })
}
function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
     document.querySelector('.play').style.display = 'none'
}

function pausarMusica(){
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.play').style.display = 'block'
}

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos (segundos){
    let campoMinutos = Math.floor(segundos/ 60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos = '0' +campoSegundos
    }
    return campoMinutos+ ':'+campoSegundos
} 





