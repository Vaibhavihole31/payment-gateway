# Payment Gateway Integration in Node.js

A payment gateway is a service that enables businesses to accept and process payments made by their customers securely. It acts as a bridge between the business's website or application and the payment network that processes the payment. It ensures that the payment information is captured and transmitted securely, and that the transaction is verified and approved before the payment is processed. Payment gateways make it easy for businesses to accept payments online and provide security features such as fraud detection and prevention.

## Configuration

To use the API, you will need to obtain your `API keys` from your Stripe account dashboard. There are two types of `API keys`: `test keys` and `live keys`. For development purposes, we will use the `test keys`.

1. Sign up for a Razorpay account and obtain your API key and secret key.

```js
KEY_ID=<YOUR_KEY_ID>

KEY_SECRET=<YOUR_KEY_SECRET>
```

2. Install the Razorpay Node.js SDK by running `npm install razorpay`.

Here's an example of how you can integrate Razorpay into your application using both documents:

```js
// Server-side code to create an order
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

const options = {
  amount: 1000,  // amount in paisa
  currency: "INR",
  receipt: "receipt#1",
  payment_capture: 1,
};

razorpay.orders.create(options, function (err, order) {
  console.log(order);
  // Send the order ID to the client-side code
});

// Client-side code to create a payment form
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>
  var options = {
    "key": "YOUR_KEY_ID",
    "amount": "1000", // amount in paisa
    "currency": "INR",
    "name": "My Store",
    "description": "Purchase Description",
    "image": "https://example.com/your_logo",
    "order_id": "ORDER_ID_FROM_SERVER",
    "handler": function (response){
        // Handle the payment success response
    },
    "prefill": {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#F37254"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response){
    // Handle the payment failure response
  });
  document.getElementById('rzp-button').onclick = function(e){
    rzp1.open();
    e.preventDefault();
  }
</script>

<!-- HTML code for the payment button -->
<button id="rzp-button">Pay with Razorpay</button>

```

In this example, the server-side code creates an order using the Razorpay API, and sends the order ID to the client-side code. The client-side code uses the order ID to create a payment form using the Razorpay Checkout library. The user can then enter their payment details and complete the payment. If the payment is successful, the "handler" function will be called with the payment details. If the payment fails, the "payment.failed" event will be triggered and the "response" object will contain the error details.

I hope this helps you understand how to integrate Razorpay into your application using the API documentation and web integration documentation.


## Documentaion 

The two documentation links you provided are related to the Razorpay payment gateway API and web integration.

[Web Integration Documentation](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/#12-integrate-with-checkout-on-client-)

[API Documentation](https://razorpay.com/docs/api/orders/)

## Conclusion
In this Redame Guide, you have learned how to integrate Razorpay into your application using the API documentation and web integration documentation.
