export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state.map(item =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );
        case "add":
            return [...state, { id: state.length + 1, ...action.payload }];
        case "delete":
            return state.filter(item => item.id !== action.id);
        case "rate":
            return state.map(item =>
                item.id === action.id ? { ...item, rating: action.rating } : item
            );
        default:
            return state;
    }
}
