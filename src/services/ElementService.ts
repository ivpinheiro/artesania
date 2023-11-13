import axios from "axios";

export class ElementService {
    static serverURL = 'https://artesania-json-server.vercel.app';
    static getAllClientComments(){
        let dataURL = `${this.serverURL}/clients`;
        return axios.get(dataURL);
    }
    static getAllProducts(){
        let dataURL = `${this.serverURL}/products`;
        return axios.get(dataURL);
    }
}