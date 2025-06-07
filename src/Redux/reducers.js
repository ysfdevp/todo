const initialState = {
    Tasks: []
};

let nextId =1;

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                Tasks: state.Tasks.filter(item => item.id !== action.payload)
            };
        case 'ADD':
            
                return {
                    ...state,
                    Tasks: [
                        ...state.Tasks,
                        { id: nextId++, text: action.payload , completed: false }
                    ]
                };
            
            return state; // No change if count is already 0
        case 'MODIFY':
            return {
                ...state,
                Tasks: state.Tasks.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            text: 'Modified'
                        };
                    }
                    return item;

                })
            };
        
        case 'DONE':
            return {
                ...state,
                Tasks: state.Tasks.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };
            default:
            return state;
    }
};
export default reducer
