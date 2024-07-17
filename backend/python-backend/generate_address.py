import json
import requests

# Use APIs or run a Bitcoin node to monitor incoming transactions to these addresses.
# Confirm the transaction after the required number of confirmations.

def load_config():
    with open('config.json') as f:
        return json.load(f)

def generate_crypto_address(currency):
    config = load_config()
    if currency not in config:
        raise ValueError("Unsupported currency")
    
    url = config[currency]['address_url']
    response = requests.post(url)
    data = response.json()
    
    if currency in ["BTC", "LTC"]:
        return data['address'], data['private']
    elif currency == "ETH":
        return data['result'], None  # ETH (ETH address doesn't typically need private key in this context)
    else:
        # Add logic for other currencies if needed
        pass

# Example usage
btc_address, btc_private_key = generate_crypto_address("BTC")
ltc_address, ltc_private_key = generate_crypto_address("LTC")
eth_address, _ = generate_crypto_address("ETH")

print(f"BTC Address: {btc_address}")
print(f"LTC Address: {ltc_address}")
print(f"ETH Address: {eth_address}")