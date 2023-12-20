import axios from "axios";

export async function getProducts(){
    return await axios.get('https://api.sampleapis.com/wines/reds')

};

export async function getProductId(id){
    return await axios.get(`https://api.sampleapis.com/wines/reds/${id}`)

};

