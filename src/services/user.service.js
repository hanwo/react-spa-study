import {request} from '../utils/axios';

const API_URL = 'member/';

class UserService {
    get() {
        return request('get', API_URL)
            .then((response) => {
                return response.data;
            });
    }

    getAll() {
        return request('get', API_URL + 'all')
            .then((response) => {
                console.log(response.data);
                return response.data;
            });
    }


}

export default new UserService();
