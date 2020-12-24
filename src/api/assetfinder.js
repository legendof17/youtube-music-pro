import axios from 'axios';

export default async function Assetfinder(url) {
    let res = await axios.get('http://localhost:6001/'+url, {validateStatus: () => true})
    // console.log(res)
    return res['status']
}