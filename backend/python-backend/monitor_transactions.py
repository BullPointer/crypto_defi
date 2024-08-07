# created modules
from complete_transfer import complete_exchange

# downloaded modules
from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    if data['confirmations'] >= "REQUIRED_CONFIRMATIONS":
        exchange_id = data['exchange_id']
        complete_exchange(exchange_id)

    return '', 200

def monitor_transaction(currency, address, confirmations_required):
    # Use appropriate API or node setup to monitor transactions
    pass



if __name__ == '__main__':
    app.run(port=5000)
