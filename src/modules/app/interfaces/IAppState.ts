import { IUser } from './IUser';
import { ITravel } from '../../travel/interfaces/ITravel';
import { ICategory } from '../../travel/interfaces/ICategory';
import { Tab } from '../../navigation/enums/Tab';

export interface IAppState {
    user: IUser | null;
    travels: ITravel[];
    categories: ICategory[];
    activeTab: Tab;
}
