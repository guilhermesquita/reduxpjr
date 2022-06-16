export function sum(a, b){ //ACTION CREATOR
    return{ //action
        type: 'SUM',
        payload: [a, b]
    }
}

export function substract(a, b){ //ACTION CREATOR
    return{ //action
        type: 'SUBSTRACT',
        payload: [a, b]
    }
}
