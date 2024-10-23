const { Category } = require('../models');

const categoryData = [
    {
        id: 'd93893cd-5eef-4907-b04d-3e5680dd64ee',
        category_name: 'Thực phẩm chức năng',
        parent_id: null,
    },
    {
        id: 'd93893cd-5eef-4907-b04d-3e5680dd4563',
        category_name: 'Dược mỹ phẩm',
        parent_id: null,
    },
    {
        id: 'd93893cd-9345-4907-b04d-3e5680dd4563',
        category_name: 'Chăm sóc cá nhân',
        parent_id: null,
    },
    {
        id: 'd93893cd-4836-4907-b04d-3e5680dd4563',
        category_name: 'Thuốc',
        parent_id: null,
    },
    {
        id: 'd93893cd-3g7g-4907-b04d-3e5680dd4563',
        category_name: 'Thiết bị y tế',
        parent_id: null,
    },
    {
        id: 'd93893cd-e8k4-4907-b04d-3e5680dd64ee',
        category_name: 'Bổ sung vitamin',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd64ee',
    },
    {
        id: 'd93893cd-5eef-gn5c-b04d-3e5680dd64ee',
        category_name: 'Tăng cường hệ miễn dịch',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd64ee',
    },
    {
        id: 'd93893cd-5eef-4gds-b04d-3e5680dd64ee',
        category_name: 'Hỗ trợ tiêu hóa',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd64ee',
    },
    {
        id: 'd93893cd-nfdr-4907-b04d-3e5680dd64ee',
        category_name: 'Hỗ trợ giảm cân',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd64ee',
    },
    {
        id: 'd93893cd-9jfb-4907-b04d-3e5680dd4563',
        category_name: 'Kem dưỡng da',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-5eef-9jtb-b04d-3e5680dd4563',
        category_name: 'Chống nắng',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-4y64-4907-b04d-3e5680dd4563',
        category_name: 'Trị mụn',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-ctbs-4907-b04d-3e5680dd4563',
        category_name: 'Chăm sóc tóc',
        parent_id: 'd93893cd-5eef-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-jr5f-4907-b04d-3e5680dd4563',
        category_name: 'Sữa tắm',
        parent_id: 'd93893cd-9345-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-36fs-4907-b04d-3e5680dd4563',
        category_name: 'Chăm sóc răng miệng',
        parent_id: 'd93893cd-9345-4907-b04d-3e5680dd4563',
    },
    {
        id:'d93893cd-2d5d-4907-b04d-3e5680dd4563',
        category_name: 'Lăn khử mùi',
        parent_id: 'd93893cd-9345-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-r6jf-3344-b04d-3e5680dd4563',
        category_name: 'Sản phẩm chăm sóc tóc',
        parent_id: 'd93893cd-9345-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-rrer-4907-b04d-3e5680dd4563',
        category_name: 'Thuốc giảm đau',
        parent_id: 'd93893cd-4836-4907-b04d-3e5680dd4563'
    },
    {
        id: 'd93893cd-4836-46hd-b04d-3e5680dd4563',
        category_name: 'Thuốc cảm cúm',
        parent_id: 'd93893cd-4836-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-85yf-4907-b04d-3e5680dd4563',
        category_name: 'Thuốc hạ sốt',
        parent_id: 'd93893cd-4836-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-nouf-4907-b04d-3e5680dd4563',
        category_name: 'Thuốc kháng sinh',
        parent_id: 'd93893cd-4836-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-574f-4907-b04d-3e5680dd4563',
        category_name: 'Máy đo huyết áp',
        parent_id: 'd93893cd-3g7g-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-6jrt-4907-b04d-3e5680dd4563',
        category_name: 'Máy đo đường huyết',
        parent_id: 'd93893cd-3g7g-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-bom6-4907-b54d-3e5680dd4563',
        category_name: 'Nhiệt kế điện tử',
        parent_id: 'd93893cd-3g7g-4907-b04d-3e5680dd4563',
    },
    {
        id: 'd93893cd-3g7g-5555-b04d-3e5680dd4563',
        category_name: 'Máy xông mũi họng',
        parent_id: 'd93893cd-3g7g-4907-b04d-3e5680dd4563',
    },
];

const seedCategories = async () => {
    await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
