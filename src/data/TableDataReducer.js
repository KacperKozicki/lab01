const TableDataReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                initialData: action.data,
                sortedData: action.data,
            };

        case "SORT_ASC":
            return {
                ...state,
                sortedData: [...state.sortedData].sort((a, b) => {
                    const aValue = action.key === "comments" ? a[action.key].length : (a[action.key].name || a[action.key].title);
                    const bValue = action.key === "comments" ? b[action.key].length : (b[action.key].name || b[action.key].title);
                    return aValue > bValue ? 1 : -1;
                }),
            };

        case "SORT_DESC":
            return {
                ...state,
                sortedData: [...state.sortedData].sort((a, b) => {
                    const aValue = action.key === "comments" ? a[action.key].length : (a[action.key].name || a[action.key].title);
                    const bValue = action.key === "comments" ? b[action.key].length : (b[action.key].name || b[action.key].title);
                    return aValue < bValue ? 1 : -1;
                }),
            };

        case "RESET":
            return {
                ...state,
                sortedData: [...state.initialData], // Reset to the initial data
            };

        default:
            return state;
    }
};

export default TableDataReducer;
