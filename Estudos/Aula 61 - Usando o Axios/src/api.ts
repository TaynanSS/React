// arquivo para requisições.

import axios from 'axios';

/*
const BASE = 'https://jsonplaceholder.typicode.com';
*/

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllPosts: async () => {
        // CÓDIGO USANDO AXIOS

        /* 
        let response = await axios.get(`${BASE}/posts`);
        return response.data;
        */

        // CÓDIGO USANDO AXIOS já com baseURL
        let response = await http.get('/posts');
        return response.data;

        
    },

//______________________CÓDIGO USANDO FETCH________________________________________________________
        /*
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;*/
        
//______________________________________________________________________________

    
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await http.post('/posts', {
            title, body, userId
        });
        return response.data;

        // CÓDIGO USANDO FETCH
        /*
        let response = await fetch (`${BASE}/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body, userId }),
            headers: { 'Content-Type': 'application/json' }
        });
        let json = await response.json();
        return json;
        */
    }    
}
