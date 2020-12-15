import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const audioList1 = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
          'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc:
          'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        // support async fetch music src. eg.
        // musicSrc: async () => {
        //   return await fetch('/api')
        // },
    },
]

const options = {
    audioLists: audioList1,
    defaultPlayIndex: 0,
    theme: 'dark',
    bounds: 'body',
    quietUpdate: true,
    clearPriorAudioLists: false,
    autoPlayInitLoadPlayList: true,
    preload: true,
    glassBg: false,
    remember: false,
    remove: true,
    defaultPosition: {
        right: 50,
        bottom: 70,
    },
    defaultPlayMode: 'order',
    mode: 'mini',
    once: false,
    autoPlay: true,
    toggleMode: true,
    showMiniModeCover: true,
    showMiniProcessBar: false,
    drag: false,
    seeked: true,
    showMediaSession: true,
    showProgressLoadBar: true,
    showPlay: true,
    showReload: true,
    showDownload: false,
    showPlayMode: true,
    showThemeSwitch: false,
    showLyric: false,
    showDestroy: false,
    extendsContent: null,
    defaultVolume: 1,
    playModeShowTime: 600,
    loadAudioErrorPlayNext: true,
    autoHiddenCover: true,
    spaceBar: true,
    responsive: true,
    mobileMediaQuery: '(max-width: 1024px)'
}

const MusicPlayer = () => {
    return (
        <div>
            <ReactJkMusicPlayer {...options} />            
        </div>
    )
}

export default MusicPlayer
