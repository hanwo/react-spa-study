import {request} from '../utils/axios';
import jwt_decode from "jwt-decode";

const API_URL = "auth/";

class AuthService {
    login(email, password) {
        return request('post', API_URL + 'login', {email, password})
            .then((response) => {
                if (response.data === '자격 증명에 실패하였습니다.') {
                    throw new Error('자격 증명에 실패하였습니다.');
                }
                if (response.data.accessToken) {
                    const info = jwt_decode(response.data.accessToken);
                    localStorage.setItem('user', JSON.stringify({...response.data, ...info}));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username, email, password) {
        return request('post', API_URL + 'signup', {
            username,
            email,
            password,
        });
    }
}

export default new AuthService();
