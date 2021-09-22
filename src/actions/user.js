import UserService from "../services/user.service";
import {REGISTER_FAIL, REGISTER_SUCCESS, SET_MESSAGE} from "./types";


export const getAll = () => (dispatch) => {
    return UserService.getAll().then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                // payload: message,
            });

            return Promise.reject();
        }
    );
};
