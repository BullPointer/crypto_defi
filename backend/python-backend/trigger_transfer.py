# Example using web3.py to interact with the Ethereum smart contract

from web3 import Web3

# Connect to Ethereum node
w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))

# Load the smart contract
contract_address = 'YOUR_CONTRACT_ADDRESS'
abi = 'YOUR_CONTRACT_ABI'
contract = w3.eth.contract(address=contract_address, abi=abi)

# Function to initiate the exchange
def initiate_exchange(from_address, to_address, from_amount, to_amount, recipient):
    nonce = w3.eth.getTransactionCount('YOUR_ADMIN_ADDRESS')
    txn = contract.functions.initiateExchange(
        from_address, 
        to_address, 
        from_amount, 
        to_amount, 
        recipient
    ).buildTransaction({
        'chainId': 1,
        'gas': 2000000,
        'gasPrice': w3.toWei('50', 'gwei'),
        'nonce': nonce,
    })
    signed_txn = w3.eth.account.signTransaction(txn, private_key='YOUR_ADMIN_PRIVATE_KEY')
    tx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    print(f'Transaction sent with hash: {tx_hash.hex()}')

# Call the function when needed
initiate_exchange('BTC_ADDRESS', 'ETH_ADDRESS', from_amount, to_amount, "recipient")


