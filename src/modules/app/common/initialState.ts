import { IAppState } from '../interfaces/IAppState';
import { ITravel } from '../../travel/interfaces/ITravel';

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

export const initialState: IAppState = {
    user: null,
    travels: generateMockTravelList(10),
};
