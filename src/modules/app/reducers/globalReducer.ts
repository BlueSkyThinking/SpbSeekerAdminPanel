import reduceReducers from 'reduce-reducers';
import { authReducer } from '../../authorization/reducers/authReducer';
import { travelReducer } from '../../travel/reducers/traverlReducer';
import { navigationReducer } from '../../navigation/reducers/navigationReducer';

const reducers = [authReducer, travelReducer, navigationReducer];

export const globalReducer = {
    app: reduceReducers(...reducers),
};
