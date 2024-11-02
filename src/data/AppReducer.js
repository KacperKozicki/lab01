export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            // W przypadku edit po prostu zwracamy stan - w pełnej aplikacji tutaj powinno być więcej logiki
            return state;

        case "rate": {
            // Zmiana wartości rating dla danego elementu
            return state.map(item =>
                item.id === action.id
                    ? { ...item, rating: action.rating }
                    : item
            );
        }

        case "delete":
            // Usunięcie elementu na podstawie id
            return state.filter(item => item.id !== action.id);

        default:
            return state;
    }
}
