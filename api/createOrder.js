const Razorpay = require("razorpay");

module.exports = async function handler(req, res) {

try {

const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
key_secret: process.env.RAZORPAY_KEY_SECRET
});

const order = await razorpay.orders.create({
amount: 100,
currency: "INR",
receipt: "booking_receipt"
});

res.status(200).json({
order_id: order.id,
amount: order.amount,
key: process.env.RAZORPAY_KEY_ID
});

} catch (error) {

res.status(500).json({
error: error.message
});

}

};
