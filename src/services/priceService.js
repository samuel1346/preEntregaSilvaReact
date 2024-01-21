import axios from "axios";

export async function getProductsPrice(){
    return await axios.get(`https://dolarapi.com/v1/dolares/blue`)
}