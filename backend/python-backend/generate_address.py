# Example using Python and BlockCypher API

import requests

def generate_bitcoin_address(api_token):
    url = f"https://api.blockcypher.com/v1/btc/main/addrs?token={api_token}"
    response = requests.post(url)
    data = response.json()
    return data['address'], data['private']

# Call the function
btc_address, btc_private_key = generate_bitcoin_address('YOUR_BLOCKCYPHER_API_TOKEN')
print(f"Generated Bitcoin Address: {btc_address}")
