import { IUser } from './IUser';
import { ITravel } from '../../travel/interfaces/ITravel';
import { Tab } from '../../navigation/enums/Tab';
import { IPoint } from '../../points/interfaces/IPoint';
import { ICategory } from '../../category/interfaces/ICategory';
import { IHint } from '../../hints/interfaces/IHint';

export interface IAppState {
    activeTab: Tab;
    travels: ITravel[];
    points: IPoint[];
    categories: ICategory[];
    hints: IHint[];
    user: IUser | null;
}
