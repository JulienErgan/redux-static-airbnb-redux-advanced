// import flats from '../flats'; 

export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';

export function setFlats() {
    // TODO: Api call! For now, simulate a DB

    // return {
    //     type: 'SET_FLATS', 
    //     payload: flats
    // } 

    return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json') 
        .then(response => response.json()) 
        .then((data) => {
            return {
            type: SET_FLATS, 
            payload: data
            }; 
        });
}



export function selectFlat(flat) {
    return {
        type: SELECT_FLAT,
        payload: flat
    }
}