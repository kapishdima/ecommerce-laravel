export const getOrders = async () => {
    return Promise.resolve([
        {
            customer: { fullname: "Liam Johnson", email: "liam@example.com" },
            type: "Sale",
            status: "Fulfilled",
            date: "2023-06-23",
            amount: "$250.00",
        },
        {
            customer: { fullname: "Liam Johnson", email: "liam@example.com" },
            type: "Sale",
            status: "Fulfilled",
            date: "2023-06-23",
            amount: "$250.00",
        },
        {
            customer: { fullname: "Liam Johnson", email: "liam@example.com" },
            type: "Sale",
            status: "Fulfilled",
            date: "2023-06-23",
            amount: "$250.00",
        },
    ]);
};
