import { IUser } from './IUser';
import { ITravel } from '../../travel/interfaces/ITravel';

export interface IAppState {
    user: IUser | null;
    travels: ITravel[];
}
