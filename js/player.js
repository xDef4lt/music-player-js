const audio = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const select = document.querySelector('select');

const imgMusic = document.querySelector('img');

playBtn.addEventListener('click', function () {
  audio.play();
  imgMusic.classList.add('play');
});

pauseBtn.addEventListener('click', function () {
  audio.pause();
  imgMusic.classList.remove('play');
});

select.addEventListener('change', function () {
  const musicas = {
    './audios/Dri - FIM DO MUNDO .mp3': 'Dri - Fim do Mundo',
    './audios/Billie Jean.mp3': 'Michael Jackson - Billie Jean',
    './audios/Manoel Gomes - Caneta Azul.mp3': 'Manoel Gomes - Caneta Azul'
  };
  const thumbs = {
    './audios/Dri - FIM DO MUNDO .mp3': './imgs/musica1-capa.jpg',
    './audios/Billie Jean.mp3': './imgs/musica2-capa.jpg',
    './audios/Manoel Gomes - Caneta Azul.mp3': './imgs/musica3-capa.jpeg'
  }

  const musicName = document.querySelector('div#music-name');

  const optChecked = document.querySelector('option:checked').value;

  audio.src = optChecked;
  musicName.innerHTML = '<p>' + musicas[optChecked] + '</p>';
  imgMusic.src = thumbs[optChecked];

  audio.play();
  imgMusic.classList.add('play');
});