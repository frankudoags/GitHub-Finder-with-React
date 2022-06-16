const GithubReducer = (state, action) => {
    switch(action.type) {

        case 'LOAD_TRUE': 
            return {
                ...state,
                loading: true
            }
        case 'LOAD_FALSE': 
            return {
                ...state,
                loading: false
            }
        case 'CLEAR': 
            return {
                ...state,
                loading: false,
                users: [],
            }

        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }

        default: 
        return state;
    }
}


export default GithubReducer