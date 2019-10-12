import { IAppState } from '../interfaces/IAppState';
import { ITravel } from '../../travel/interfaces/ITravel';
import { Tab } from '../../navigation/enums/Tab';
import { IPoint } from '../../points/interfaces/IPoint';

function generateMockTravelList(numberOfItems: number): ITravel[] {
    return Array.from(Array(numberOfItems), (value, index) => ({
        id: index,
        name: `Travel ${index + 1}`,
        adminId: 1,
        imgUrl: '',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi eos et excepturi facilis iste maiores necessitatibus nihil, obcaecati porro provident quae repudiandae, similique unde!`,
        categoryName: `category ${index + 1}`,
        createdDate: new Date(),
        updatedDate: new Date(),
    }));
}

function generateMockPointList(numberOfItems: number): IPoint[] {
    return Array.from(Array(numberOfItems), (value, index) => ({
        adminId: 1,
        createdDate: Date.now(),
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis, consequatur dignissimos dolor dolorum eligendi eos et excepturi facilis iste maiores necessitatibus nihil, obcaecati porro provident quae repudiandae, similique unde!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur cumque dolorem dolores dolorum ducimus eveniet excepturi facere fugit id itaque mollitia nesciunt placeat quas quidem quos temporibus, vel voluptas?`,
        id: index,
        imgUrlList: [],
        latitude: 0,
        longitude: 0,
        name: `Point ${index + 1}`,
        shortDescription: 'string',
        orderNum: 0,
        travelId: 0,
        updatedDate: Date.now(),
    }));
}

export const initialState: IAppState = {
    activeTab: Tab.TRAVEL,
    travels: generateMockTravelList(10),
    points: generateMockPointList(10),
    categories: [
        {
            id: 1,
            name: 'Architecture',
        },
        {
            id: 2,
            name: 'Eat',
        },
    ],
    user: null,
};
