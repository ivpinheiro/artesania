import axios from "axios";

export class ElementService {
    static serverURL = 'http://localhost:9000';
    static getAllClientComments(){
        let dataURL = `${this.serverURL}/clients`;
        return axios.get(dataURL);
    }
    static getAllProducts(){
        let dataURL = `${this.serverURL}/products`;
        return axios.get(dataURL);
    }
}