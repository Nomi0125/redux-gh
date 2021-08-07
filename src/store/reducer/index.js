const INITIAL_STATE = {
    users: [
        {
            name:"Ghous",
            email: 'ghoun@gmail'
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SetData':
            return(
                {...state,
                users: [...state.users, action.payload]}
            )
    }
    return  state
}