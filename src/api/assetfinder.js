import axios from 'axios';

export default async function Assetfinder(url) {
    let res = await axios.get(url, {validateStatus: () => true})
    // console.log(res)
    return res['status']
}