from web3 import Web3

# Connect to Ethereum node
w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))

# Load the smart contract
contract_address = 'YOUR_CONTRACT_ADDRESS'
abi = 'YOUR_CONTRACT_ABI'
contract = w3.eth.contract(address=contract_address, abi=abi)

# Function to initiate the exchange
def complete_exchange(user, user_index):
    nonce = w3.eth.getTransactionCount('YOUR_ADMIN_ADDRESS')
    txn = contract.functions.completeExchange(user, user_index).buildTransaction({
        'chainId': 1,
        'gas': 2000000,
        'gasPrice': w3.toWei('50', 'gwei'),
        'nonce': nonce,
    })
    signed_txn = w3.eth.account.signTransaction(txn, private_key='YOUR_ADMIN_PRIVATE_KEY')
    tx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    print(f'Transaction sent with hash: {tx_hash.hex()}')



