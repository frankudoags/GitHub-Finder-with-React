import axios from 'axios'
const github = axios.create({
    baseURL: "https://api.github.com",

})
  
  //Get Search results
 export const searchUser = async (text) => { 
        const params = new URLSearchParams({
            q: text
        });
        const response = await github.get(`/search/users?${params}`);
        return response.data.items;
    }
        //Get singleUser
   export const getUser = async (login) => { 
            const user = await github.get(`/users/${login}`)
            if(user.status === 404) {
                window.location = '/notfound'
            } else {
                return user.data;
            }
        }
    export const getUserRepo = async (user) => {
            const repo = await github.get(`/users/${user}/repos`)
            return repo.data;
        }