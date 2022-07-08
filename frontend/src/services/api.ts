import  Axios  from "axios";
import { IUser } from "../context/AuthProvider/types";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u')

    if(!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export const Api = Axios.create({
    baseURL: 'http://localhost:4000',
    headers: {"Content-Type": "application/json"}
})