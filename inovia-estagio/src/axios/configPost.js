import axios from "axios";

const post = axios.create({
    baseURL: "http://inovia.eastus.cloudapp.azure.com/api/person",
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    body: {
        
    }
});

export default post;