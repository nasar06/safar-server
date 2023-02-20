const stripe = require('stripe')(process.env.PAYMENT_STRIPE_SK);

const paymentIntent = async (req, res) => {

    try {
        const { price } = req.body;
        const amount = price * 100
        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: amount,
            "payment_method_types": [
                "card"
            ],
        });
        res.send({ client_secret: paymentIntent.client_secret });
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

exports.paymentIntent = paymentIntent