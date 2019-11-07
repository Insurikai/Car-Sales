export const ADD = "ADD";
export const add = feature => {
    return{
        type: ADD,
        payload: feature
    }
};
export const REMOVE = "REMOVE";
export const remove = feature => {
    return{
        type: REMOVE,
        payload: feature
    }
};