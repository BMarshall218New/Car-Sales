
import { UPDATE_FEATURES } from "../actions/addFeatureAction";
import { REMOVE_FEATURE } from "../actions/addFeatureAction";

export const initialState = {

    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },

    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]

}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FEATURES:
            return {
                ...state,
                additionalPrice: action.payload.price + state.additionalPrice,
                //why .price after payload?
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: action.payload.price - state.additionalPrice,
                car: {
                    ...state.car,
                    features: state.car.features.filter(features => features.id !== action.payload.id)
                }   //dont quite understand above line specifically after fileter. 
            }
        default:
            return state;
    }

}