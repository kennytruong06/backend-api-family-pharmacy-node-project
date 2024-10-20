'use strict';

const { User } = require('../models');

const userData = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        address: '123 Main St, Cityville',
        phoneNumber: '123-456-7890',
        role: '0',
        imgUrl: 'https://example.com/john.jpg',
        gmail_id: 'john.doe@gmail.com',
        fb_id: 'john.doe.fb',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password123',
        address: '456 Maple St, Townsville',
        phoneNumber: '987-654-3210',
        role: '0',
        imgUrl: 'https://example.com/jane.jpg',
        gmail_id: 'jane.smith@gmail.com',
        fb_id: 'jane.smith.fb',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        password: 'password123',
        address: '789 Oak St, Villagetown',
        phoneNumber: '555-555-5555',
        role: '0', // Có thể là admin nếu cần
        imgUrl: 'https://example.com/bob.jpg',
        gmail_id: 'bob.johnson@gmail.com',
        fb_id: 'bob.johnson.fb',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        password: 'password123',
        address: '101 Pine St, Hamletburg',
        phoneNumber: '222-333-4444',
        role: '0',
        imgUrl: 'https://example.com/alice.jpg',
        gmail_id: 'alice.brown@gmail.com',
        fb_id: 'alice.brown.fb',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Charlie White',
        email: 'charlie.white@example.com',
        password: 'password123',
        address: '202 Birch St, Hamletville',
        phoneNumber: '999-888-7777',
        role: '0',
        imgUrl: 'https://example.com/charlie.jpg',
        gmail_id: 'charlie.white@gmail.com',
        fb_id: 'charlie.white.fb',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
