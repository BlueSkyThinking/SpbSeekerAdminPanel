import reduceReducers from 'reduce-reducers';
import { authReducer } from '../../authorization/reducers/authReducer';
import { travelReducer } from '../../travel/reducers/traverlReducer';

const reducers = [authReducer, travelReducer];

export const globalReducer = {
    app: reduceReducers(...reducers),
};
