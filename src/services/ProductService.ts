import axios from "axios";

export class ProductService {
    static serverURL = 'https://artesania-json-server.vercel.app';
    static getAllClientComments(){
        let dataURL = `${this.serverURL}/clients`;
        return axios.get(dataURL);
    }
    static getAllProducts(){
        let dataURL = `${this.serverURL}/products`;
        return axios.get(dataURL);
    }
    static getProduct(elementId: number){
        let dataURL = `${this.serverURL}/products/${elementId}`;
        return axios.get(dataURL);
    }
    static getAllArtists(){
        let dataURL = `${this.serverURL}/artists`;
        return axios.get(dataURL);
    }}