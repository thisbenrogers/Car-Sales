import { BUY_ITEM, REM_FEAT } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            console.log("action.payload in BUY_ITEM reducer: ", action.payload);
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                }
            };
        case REM_FEAT:
            console.log("action.payload in REM_FEAT reducer: ", action.payload);
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feat => feat.id !== action.payload.id)
                }
            }
        default:
            console.log("default state in reducer switch: ", state);
            return state;
    }
}