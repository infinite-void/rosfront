import axios from "axios";

export const baseURL = "http://localhost:3000/api/";
export const url_signin = "user/signin";
export const url_register = "user/register";
export const url_forgotPassword = "user/forgotpassword";
export const url_resetPassword = "user/resetpassword";
export const url_answer = "ros/answer";
export const url_leaderboard = "ros/leaderboard";
export const url_question = "ros/question";

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
});

export const apiSignin = async (credentials) => {
    try {
        const response = await api.post(
            `${url_signin}`, {
                email: credentials.email,
                pwd: credentials.pwd
            }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const apiRegister = async (credentials) => {
    try {
        const response = await api.post(
            `${url_register}`, {
                email: credentials.email,
                name: credentials.name,
                phone: credentials.phone,
                college: credentials.college,
                dept: credentials.dept,
                year: credentials.year,
                pwd: credentials.pwd
            }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const apiAnswer = async (data) => {
    try {
        const response = await api.post(
            `${url_answer}`, {
                answer: data.answer
            }, {
                headers: {
                    Authorization: data.token
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const apiLeaderboard = async (data) => {
    try {
        const response = await api.get(
            `${url_leaderboard}`, {
                headers: {
                    Authorization: data.token
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const apiQuestion = async (data) => {
    try {
        const response = await api.get(
            `${url_question}`, {
                headers: {
                    Authorization: data.token
                }
            }
        );

        return response;
    } catch (error) {
        return error.response.data;
    }
};

export const apiForgotPassword = async (credentials) => {

    try {
        const response = await api.post(
            `${url_forgotPassword}`, {
                email: credentials.email,
            })
        return response

    } catch (error) {
        return error.response.data
    }
}

export const apiResetPassword = async (credentials) => {

    try {
        const response = await api.post(
            `${url_resetPassword}`, {
                user: credentials.user,
                key: credentials.key,
                pwd: credentials.pwd,
            })
        return response
    } catch (error) {
        return error.response.data
    }
}