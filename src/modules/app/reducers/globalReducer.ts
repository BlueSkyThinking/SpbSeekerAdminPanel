import reduceReducers from 'reduce-reducers';
import { authReducer } from '../../authorization/reducers/authReducer';
import { travelReducer } from '../../travel/reducers/traverlReducer';
import { navigationReducer } from '../../navigation/reducers/navigationReducer';
import { pointReducer } from '../../points/reducers/pointReducer';

const reducers = [authReducer, travelReducer, navigationReducer, pointReducer];

export const globalReducer = {
    app: reduceReducers(...reducers),
};
