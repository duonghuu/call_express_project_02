import axios, { AxiosError } from "axios";
import apiClient from "@services/apiClient";
import utils from "@utils/index";
import * as CryptoJS from 'crypto-js';

export const CallService = {

    async sendSignUpS2S(): Promise<any> {
        const randomMobileNumber = utils.randomPhone();
        const randomNID = utils.randomNID();
        const randomUserID = utils.randomUserID();
        let hash = CryptoJS.SHA256(randomNID);
        const CUSTOMER_ID_ = hash.toString(CryptoJS.enc.Base64);

        const data = {
            "insertOnNoMatch": true,
            "updateOnMatch": null,
            "matchColumnName1": "CUSTOMER_ID_",
            "matchColumnName2": "MOBILE_NUMBER_",
            "UserID": randomUserID,
            "UserStatus": "1",
            "data": {
                "CUSTOMER_ID_": CUSTOMER_ID_,
                "MOBILE_NUMBER_": randomMobileNumber,
                "LEAD_SOURCE": "FEOL_2.0"

            }
        }
        const response = await apiClient.post('http://localhost:3000/responsys/signup_s2s', data);
        return response;
    },
    async sendTriggerS2S(): Promise<any> {
        const randomMobileNumber = utils.randomPhone();
        const randomUserID = utils.randomUserID();

        const data = {
            activity: "Signup",
            event_name: "Signup_FaceID",
            UserID: randomUserID,
            UserStatus: "1",
            event_source: "FEOL2.0",
            customer_id: null,
            email_address: null,
            mobile_number: randomMobileNumber,
            params: {
                CUSTOMER_TYPE: "NEW",
                RECOGNITION: "HIGH",
                SIGNUP_STATUS: "FACEID"
            }
        };

        const response = await apiClient.post('http://localhost:3000/responsys/trigger_s2s', data);
        return response;
    }

};
