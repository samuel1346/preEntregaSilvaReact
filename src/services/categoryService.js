import axios from "axios"

export async function getProductsCategorys(){
    return await axios.get(`https://api.sampleapis.com/wines/reds/`)
}

export async function getProductCategory(wineryId){
    return await axios.get(`https://api.sampleapis.com/wines/reds/?winery=${wineryId}`)
}



