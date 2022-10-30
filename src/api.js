import axios from "axios";

const api = axios.create({
    baseURL: "https://amazon-api.sellead.com/country"
})

export async function retornaPaises() {
    const retorno = await api.get();
  
    console.log(retorno);
  }
  
