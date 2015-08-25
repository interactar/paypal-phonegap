


return url : https://vast-gorge-4003.herokuapp.com/paypal/completed
cancel url : https://vast-gorge-4003.herokuapp.com/paypal/canceled
cancel url : https://vast-gorge-4003.herokuapp.com/paypal/paypal
cancel url : https://vast-gorge-4003.herokuapp.com/paypal/creditcard



EXPRESS CHECKOUT API
# docu

# developers account portal
https://developer.paypal.com/
# developers make api call
https://developer.paypal.com/webapps/developer/docs/integration/direct/make-your-first-call/
# developers rest api documentation
https://developer.paypal.com/webapps/developer/docs/api/#authentication--headers

0. https://developer.paypal.com/docs/classic/express-checkout/gs_expresscheckout/
https://devtools-paypal.com/integrationwizard/

select a wizard

> Credit Card PayFlow


# create manager account
1. https://www.paypal.com/us/cgi-bin/webscr?cmd=_payflow-pro-overview-outside

# create account wizzard
2. https://registration.paypal.com/welcomePage.do

# login to manager account (just to check)
3. https://manager.paypal.com/

required fields you will recieve via email

Your Partner ID: PayPal (Manager Id)
Your Unique Vendor ID: Facugon 

Sample Input

* Partner:		PayPal
* Merchant Login:	Facugon
  User:			Facugon
* Password: thepassword


> Express Checkout PayPal



--------------------------------------


sample app test

Sandbox account   : 
Sandbox end point : 
Client ID         : 
Secret            : 


# create oauth tokens
https://developer.paypal.com/webapps/developer/docs/integration/direct/make-your-first-call/


sample script call

```bash

#!/bin/bash
curl -v https://api.sandbox.paypal.com/v1/oauth2/token -H "Accept: application/json" -H "Accept-Language: en_US" -u "user:password" -d "grant_type=client_credentials"

```


