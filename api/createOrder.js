const Razorpay = require("razorpay");

module.exports = async (req, res) => {

res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

if (req.method === "OPTIONS") {
return res.status(200).end();
}

try {

const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
key_secret: process.env.RAZORPAY_KEY_SECRET
});

const order = await razorpay.orders.create({
amount: 100,
currency: "INR",
receipt: "receipt_order"
});

return res.status(200).json({
order_id: order.id,
amount: order.amount,
key: process.env.RAZORPAY_KEY_ID
});

} catch (error) {

return res.status(500).json({
error: error.message
});

}

};
