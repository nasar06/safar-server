const stripe = require('stripe')(process.env.PAYMENT_STRIPE_SK);

const paymentIntent = async (req, res) => {

    try {
        const { price, transactionId, email, roomId } = req.body;
        const amount = price * 100
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            transactionId,
            email,
            roomId,
            currency: 'usd',
            "payment_method_types": [
                "card"
            ],
        });
        res.send({ client_secret: paymentIntent.client_secret });
    }
    catch (err) {
        console.log(err)
    }
}

exports.paymentIntent = paymentIntent