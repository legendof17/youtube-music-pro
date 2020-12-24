import axios from 'axios'

export default async function Nametoid(name) {
    let id = await axios.get('http://youtube-scrape.herokuapp.com/api/search?q='+name)
    // console.log(id)
    return id['data']['results'][0]['video']['id']
}