import reduceReducers from 'reduce-reducers';
import { authReducer } from '../../authorization/reducers/authReducer';

const reducers = [authReducer];

export const globalReducer = {
    app: reduceReducers(...reducers),
};
