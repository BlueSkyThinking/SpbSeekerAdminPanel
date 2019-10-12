import reduceReducers from 'reduce-reducers';
import { authReducer } from '../../authorization/reducers/authReducer';
import { travelReducer } from '../../travel/reducers/traverlReducer';
import { navigationReducer } from '../../navigation/reducers/navigationReducer';
import { pointReducer } from '../../points/reducers/pointReducer';
import { categoryReducer } from '../../category/reducers/categoryReducer';
import { hintReducer } from '../../hints/reducers/hintReducer';

const reducers = [
    authReducer,
    travelReducer,
    navigationReducer,
    pointReducer,
    categoryReducer,
    hintReducer,
];

export const globalReducer = {
    app: reduceReducers(...reducers),
};
