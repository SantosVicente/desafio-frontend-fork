import axios from "axios";

const request = axios.create({
    baseURL: "http://inovia.eastus.cloudapp.azure.com/api/person",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default request;