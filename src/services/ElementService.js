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
    static getAllElements(){
        let dataURL = `${this.serverURL}/elements`;
        return axios.get(dataURL);
    }
    static getElement(elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.get(dataURL);
    }
    static createElement(element){
        let dataURL = `${this.serverURL}/elements/`;
        return axios.post(dataURL, element);
    }
    static updateElement(element, elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.put(dataURL, element);
    }
    static deleteElement(elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.delete(dataURL);
    }
    static getAllGroups(element){
        let groupId = element.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);
    }
}