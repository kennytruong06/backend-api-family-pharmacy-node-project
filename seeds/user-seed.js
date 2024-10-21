'use strict';

const { User } = require('../models');

const userData = [
    {
        name: 'Nguyễn Văn A',
        email: 'nguyen.a@example.com',
        password: '$2a$10$clNoji6UO6kyv0k26rdyTeDxu0GwJEwVCql9plZHenM1onuagS4Gm',
        address: '123 Đường Lê Lợi, Quận 1',
        phoneNumber: '0912345678',
        role: 0,
        imgUrl: 'https://example.com/nguyen_a.jpg',
        gmail_id: 'nguyen.a@gmail.com',
        fb_id: 'nguyen.a.fb',
    },
    {
        name: 'Trần Thị B',
        email: 'tran.b@example.com',
        password: '$2a$10$1xrKyCQqCqVXd0BAXYumsO7cikDWRn1AJga4LEk7zg2YBpw5yP0iu',
        address: '456 Đường Nguyễn Huệ, Quận 2',
        phoneNumber: '0987654321',
        role: 0,
        imgUrl: 'https://example.com/tran_b.jpg',
        gmail_id: 'tran.b@gmail.com',
        fb_id: 'tran.b.fb',
    },
    {
        name: 'Lê Văn C',
        email: 'le.c@example.com',
        password: '$2a$10$2VBTxviIlAjS.iyrnSrIpOAW0OBOLnA8e8dVDK5aNk0a8ok/43SPS',
        address: '789 Đường Trần Hưng Đạo, Quận 3',
        phoneNumber: '0123456789',
        role: 0,
        imgUrl: 'https://example.com/le_c.jpg',
        gmail_id: 'le.c@gmail.com',
        fb_id: 'le.c.fb',
    },
    {
        name: 'Phạm Thị D',
        email: 'pham.d@example.com',
        password: '$2a$10$MJsLBNjKmlAYbvBF7EMKjuESA4QmaLrPD4koXR5ZKyPvwIWfyI3cK',
        address: '101 Đường Phạm Ngọc Thạch, Quận 4',
        phoneNumber: '0987654320',
        role: 0,
        imgUrl: 'https://example.com/pham_d.jpg',
        gmail_id: 'pham.d@gmail.com',
        fb_id: 'pham.d.fb',
    },
    {
        name: 'Nguyễn Văn E',
        email: 'nguyen.e@example.com',
        password: '$2a$10$fur0/eA9EQltYxsleiPG4.HmgatGpxsXw/.FzH9xuPlkNB1lB0dZG',
        address: '202 Đường Cách Mạng Tháng Tám, Quận 5',
        phoneNumber: '1234567890',
        role: 0,
        imgUrl: 'https://example.com/nguyen_e.jpg',
        gmail_id: 'nguyen.e@gmail.com',
        fb_id: 'nguyen.e.fb',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
