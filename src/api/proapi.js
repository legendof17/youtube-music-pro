import axios from 'axios'

export default async function ProApi(songName,dn) {
    // const ownedproxy = 'https://ntop-cors.herokuapp.com/'
    // let response = await axios.get(ownedproxy+'https://youtube-music-pro.herokuapp.com/proapi?name='+songName+'&dn='+dn)
    const apiurl = 'https://youtube-music-pro.herokuapp.com/proapi?name='
    let response = await axios.get(apiurl+songName+'&dn='+dn)
    // console.log(response['data'])
    return response['data']
}
