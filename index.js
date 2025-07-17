require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.TRADING_SIM_API_KEY;
const API_URL = process.env.TRADING_SIM_API_URL;

async function simulateTrade() {
  try {
    const res = await axios.post(
      API_URL,
      {
        action: "buy",
        amount: 10,
        symbol: "ETH"
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("✅ Trade success:", res.data);
  } catch (err) {
    console.error("❌ Trade error:", err.response?.data || err.message);
  }
}

simulateTrade();
