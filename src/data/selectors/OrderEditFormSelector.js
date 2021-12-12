export function getOrderId (appState) {
    return appState.OrderEditFormReducer.orderId
}

export function getOrderDate (appState) {
    return appState.OrderEditFormReducer.orderDate
}

export function getOrderStatus (appState) {
    return appState.OrderEditFormReducer.orderStatus
}

export function getOrderPosition(appState) {
    return appState.OrderEditFormReducer.orderPosition
}

export function getOrderSum(appState) {
    return appState.OrderEditFormReducer.orderSum
}

export function getFullNameUser(appState) {
    return appState.OrderEditFormReducer.fullNameUser
}
