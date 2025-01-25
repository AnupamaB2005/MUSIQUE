console.log("Welcome to Spotify");
//iniyialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/tam.mp3');
//let //audioElement = new Audio('lov.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Unnaku than", filePath: "songs/tam.mp3", coverPath: "covers/tam1img.jpg"},
    {songName: "Willow", filePath: "songs/tay.mp3", coverPath: "covers/timg.jpg"},
   {songName: "Life goes on", filePath: "songs/bts.mp3", coverPath: "covers/bts.jpg"},
    {songName: "Challagali thakutunna", filePath: "songs/t.mp3", coverPath: "covers/ilai1img.jpg"},
    {songName: "Ammadi: ",filePath: "songs/amma.mp3", coverPath: "covers/ammaimg.jpg"},
    {songName: "Forever star", filePath: "songs/hid.mp3", coverPath: "covers/hidimg.jpg"},
    {songName: "Jeevamshamayi", filePath: "songs/mal.mp3", coverPath: "covers/malimg.jpg"},
    {songName: "Shinunoga e-wa", filePath: "songs/imp.mp3", coverPath: "covers/impimg.jpg"},
    {songName: "Janiye", filePath: "songs/jan1.mp3", coverPath: "covers/janimg.jpg"},
    {songName: "yemito", filePath: "songs/yem.mp3", coverPath: "covers/yemimg.jpg"},
]
songItems.forEach((element, i)=>{
    //console.log(element,i)
    //element.coverPelement.getElementsByTagName('img')[0].src = songs[i].coverPath;
    //element.coverPelement.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement .play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
    //Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        //masterSongName.innerText = songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `spotify/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        //audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
//element.coverPelement.getElementsByTagName('img')[0].src = songs[i].coverPath;
//element.coverPelement.getElementsByTagName('img')[0].src = songs[i].coverPath;
document.getElementById('next').addEventListener('click', ()=>{
    if ( songIndex>=9){
       songIndex = 0
    }
    else{
       songIndex += 1;
    }
    //audioElement.src = `${songIndex+1}.mp3`;
    //audioElement.currentTime = 0;
    //audioElement.play();
    //masterPlay.classList.remove('fa-play-circle');
    //masterPlay.classList.add('fa-pause-circle');
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
       songIndex=0
    }
    else{
       songIndex -= 1;
    } I
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
