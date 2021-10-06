import {request} from '../utils/axios';

const API_URL = 'member/';

class UserService {
    get(email) {
        return request('get', API_URL, email)
            .then((response) => {
                return response.data;
            });
    }

    getAll() {
        return request('get', API_URL + 'all' + '?page=1&size=10')
            .then((response) => {
                return response.data;
            });
    }

    editUser(email, name){
        return request('put', API_URL, {
            email,
            name,
        });
    }

    deleteUser(email){
        return request('delete', API_URL + email, {
            email,
        });
    }
}

export default new UserService();
