import { IUser } from './IUser';
import { ITravel } from '../../travel/interfaces/ITravel';
import { ICategory } from '../../travel/interfaces/ICategory';

export interface IAppState {
    user: IUser | null;
    travels: ITravel[];
    categories: ICategory[];
}
