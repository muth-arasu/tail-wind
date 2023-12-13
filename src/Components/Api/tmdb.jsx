    import axios from 'axios'
    import react from 'react'

    export default axios.create({
        baseURL:"https://api.themoviedb.org/3",
        headers:{
            Accept:"application/json"
        },
        params:{
            api_key:`9ffa2c0b3d2fb642677c5c868aa96907`,
        }
    })