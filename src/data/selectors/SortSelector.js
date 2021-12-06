export function getSortColumn (appState) {
    return appState.SortReducer.column 
}

export function getSortAscending (appState) {
    return appState.SortReducer.ascending 
}