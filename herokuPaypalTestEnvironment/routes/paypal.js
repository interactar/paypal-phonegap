"use strict";

var router = require('express').Router();
var paypal = require('paypal-rest-sdk');


paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQu7LO1CXVfpzUQUgKN032ZR_Qc8U_SLAdTe3Jo1bnXLgJqLFZeDSizaqRZ0byWP9lg2emXhPu8qbvJC',
  'client_secret': 'EMzw59EvdUhNYQegxxlCRapgTnBKBf8bChZKcH24_Wj0Zgpt-4nJVJbdU-tGEi_M5WR7uTfuiy5tg1Cs'
});


// call to this endpoint generate a credit card web payment redirect uri
// curl -X POST http://localhost:5000/paypal/creditcard
router.post('/creditcard', function(req,res,next){

  var create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "credit_card",
      "funding_instruments": [{
        "credit_card": {
          "type": "visa",
          "number": "4417119669820331",
          "expire_month": "11",
          "expire_year": "2018",
          "cvv2": "874",
          "first_name": "Joe",
          "last_name": "Shopper",
          "billing_address": {
            "line1": "52 N Main ST",
            "city": "Johnstown",
            "state": "OH",
            "postal_code": "43210",
            "country_code": "US"
          }
        }
      }]
    },
    "transactions": [{
      "amount": {
        "total": "7",
        "currency": "USD",
        "details": {
          "subtotal": "5",
          "tax": "1",
          "shipping": "1"
        }
      },
      "description": "This is the payment transaction description."
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
      res.json(payment);
    }
  });

});

// call to this endpoint generate a paypal web payment redirect uri
// curl -X POST http://localhost:5000/paypal/paypal
router.post('/paypal', function(req,res,next){
  var create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://return.url",
      "cancel_url": "http://cancel.url"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "item",
          "sku": "item",
          "price": "1.00",
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": "1.00"
      },
      "description": "This is the payment description."
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
      res.json(payment);
    }
  });
});

router.get('/completed', function(req,res,next){
  res.json({
    'headers': req.headers,
    'url': req.url,
    'body': req.body,
    'query': req.query
  });
});

router.get('/canceled', function(req,res,next){
  res.json({
    'headers': req.headers,
    'url': req.url,
    'body': req.body,
    'query': req.query
  });
});

module.exports = router;
