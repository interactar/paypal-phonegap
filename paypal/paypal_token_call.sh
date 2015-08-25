#!/bin/bash

# request testapp token
curl -v https://api.sandbox.paypal.com/v1/oauth2/token -H "Accept: application/json" -H "Accept-Language: en_US" -u "user:passwd" -d "grant_type=client_credentials"
