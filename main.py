import os
import requests

API_KEY = os.getenv("TRADING_SIM_API_KEY")
BASE_URL = os.getenv("TRADING_SIM_API_URL", "https://api.competitions.recall.network/api")

headers = {
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

def get_balance():
    response = requests.get(f"{BASE_URL}/portfolio", headers=headers)
    return response.json()

if __name__ == "__main__":
    print("📊 Fetching Portfolio...")
    balance = get_balance()
    print(balance)
