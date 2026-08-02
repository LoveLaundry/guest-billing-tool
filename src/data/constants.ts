export const sampleBillInfo = {
    name: 'MoonKnight Hotel',
    address: 'No.01 MoonKnight Chilaw',
    contactNumber: '+94-77-1234567',
    receiptDate: '2023-10-15',
    deliveredDate: '2023-10-20',
    TransportFee: 2500.00,
    billId: 'BILL123456',
    HotelGatePass: 'HG987654',
    LaundrySignedBy: 'Dulshan Siriwardhana',
    HotelSignedBy: 'Mike Johnson',
    items: [
        { itemName: 'Shirt', quantity: 3, price: 15.00 },
        { itemName: 'Pants', quantity: 2, price: 25.00 },
        { itemName: 'Jacket', quantity: 1, price: 50.00 }
    ],
    total: 150.00,
};

export const conditions = [
    "Garments will only be returned on production of the bill, in case of loss of the bill National card of the customer should be produced.",
    "Garments should be collected within 10 days from the date of delivery, after which the management will not be responsible for any loss or damage.",
    "The management is not responsible for any shrinkage or color fading of garments after cleaning.",
    "Any complaints regarding the quality of cleaning should be made within 24 hours of delivery.",
    "The management reserves the right to change the terms and conditions without prior notice."
];