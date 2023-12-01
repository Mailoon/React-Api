import { API_RickAndMorty } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacter(){
    const response = await fetch(API_RickAndMorty.CHARACTER());
    return response.json();
}
    async getAllChaById(id){
    const response = await fetch(API_RickAndMorty.CHARACTER_BY_ID(id));
    return response.json();
}

}
export default new RickAndMortyService();