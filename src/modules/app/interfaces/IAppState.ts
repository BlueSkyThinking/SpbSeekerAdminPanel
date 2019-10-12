import { IUser } from './IUser';
import { ITravel } from '../../travel/interfaces/ITravel';
import { ICategory } from '../../travel/interfaces/ICategory';
import { Tab } from '../../navigation/enums/Tab';
import { IPoint } from '../../points/interfaces/IPoint';

export interface IAppState {
    activeTab: Tab;
    travels: ITravel[];
    points: IPoint[];
    categories: ICategory[];
    user: IUser | null;
}
