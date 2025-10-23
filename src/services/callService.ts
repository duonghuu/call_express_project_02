import axios, { AxiosError } from "axios";

export const CallService = {

    async sendSignUpS2S(): any {
        try {
            const response = await axios.get('https://google.com');

            console.log('Request successful, Status:', response.status);
        } catch (error: Error) {
            // Bắt lỗi. AxiosError là kiểu dữ liệu chuẩn khi Axios thất bại.
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;

                // Xử lý lỗi từ phía server (nếu có response)
                if (axiosError.response) {
                    console.error(`Request failed with status: ${axiosError.response.status}`);
                }
                // Xử lý lỗi mạng hoặc CORS (không có response)
                else if (axiosError.request) {
                    console.error('Request failed: No response received (likely a CORS or network issue).');
                } else {
                    // Lỗi khi thiết lập request
                    console.error('Error setting up request:', axiosError.message);
                }
            } else {
                // Lỗi không phải Axios (ví dụ: lỗi code trong try block)
                console.error('An unexpected error occurred:', (error as Error).message);
            }
        }
    },

};
