const utils = {
    randomNID(): string {
        // Hàm hỗ trợ để lấy một số nguyên ngẫu nhiên trong một phạm vi
        const getRandomInt = (min: number, max: number): number => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // 1. Mã tỉnh/thành phố (3 chữ số)
        // Chọn ngẫu nhiên một mã tỉnh/thành phố phổ biến (ví dụ: Hà Nội 001, HCM 079, Đà Nẵng 048,...)
        // Hoặc lấy bất kỳ từ 001 đến 096 (tất cả các tỉnh/thành phố theo quy định)
        const provinceCodes = [
            '001', '079', '048', '046', '036', '030', '027', '029', '010', '017', '040', '049'
        ];
        const provinceCode = provinceCodes[getRandomInt(0, provinceCodes.length - 1)];

        // 2. Mã giới tính và thế kỷ (1 chữ số)
        // 0: Nam, thế kỷ 20 (19xx)
        // 1: Nữ, thế kỷ 20 (19xx)
        // 2: Nam, thế kỷ 21 (20xx)
        // 3: Nữ, thế kỷ 21 (20xx)
        const genderCenturyCode = getRandomInt(0, 3).toString();

        // 3. Mã năm sinh (2 chữ số)
        // Giả định người có CCCD sinh từ 1970 đến 2005 để tạo sự "thực tế"
        let yearOfBirth: number;
        if (genderCenturyCode === '0' || genderCenturyCode === '1') {
            // Thế kỷ 20 (19xx): 1970 - 1999
            yearOfBirth = getRandomInt(70, 99);
        } else {
            // Thế kỷ 21 (20xx): 2000 - 2005
            yearOfBirth = getRandomInt(0, 5);
        }
        const yearCode = yearOfBirth.toString().padStart(2, '0');

        // 4. Số ngẫu nhiên (6 chữ số cuối)
        const randomSuffix = getRandomInt(100000, 999999).toString();

        // Ghép lại thành chuỗi 12 chữ số
        return provinceCode + genderCenturyCode + yearCode + randomSuffix;
    },
    randomPhone(): string {
        // 1. Định nghĩa các đầu số di động phổ biến hiện nay
        const prefixes = [
            '09', // Viettel, Mobi, Vina (phổ biến nhất)
            '08', // Viettel, Vina, Gmobile
            '07', // Mobi, Vietnamobile
            '03', // Viettel
            '05', // Vietnamobile, Local
        ];

        // 2. Chọn ngẫu nhiên một đầu số (2 chữ số)
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

        // 3. Tạo 8 chữ số còn lại (tổng cộng 10 chữ số: 2 + 8)
        // Tạo một số ngẫu nhiên từ 10.000.000 đến 99.999.999
        const minSuffix = 10000000;
        const maxSuffix = 99999999;
        const suffix = Math.floor(Math.random() * (maxSuffix - minSuffix + 1) + minSuffix);

        // 4. Ghép lại và trả về
        return prefix + suffix.toString();
    },
    randomUserID(minLength: number = 3, maxLength: number = 6): string {
        // 1. Chọn ngẫu nhiên độ dài cho phần số
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

        // 2. Tính toán phạm vi số dựa trên độ dài
        // Ví dụ: length=3 -> min=100, max=999
        // Ví dụ: length=6 -> min=100000, max=999999
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;

        // 3. Tạo số ngẫu nhiên trong phạm vi
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // 4. Ghép tiền tố và hậu tố số
        return `UserID${randomNumber}`;
    }
}

export default utils;