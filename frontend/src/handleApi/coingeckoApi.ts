import axios from "axios";

const link = "https://api.coingecko.com/api/v3/coins";

export const getPopularCoinApi = async () => {
    const header = {
        "x-cg-demo-api-key": "CG-BsK5K8jame6HvBvpT79MDTqD"
    }
    const response = await axios.get(`${link}/markets/?vs_currency=usd`, { headers: header });

    return response;
};
// https://api.coingecko.com/api/v3/coins/bitcoin
// /bitcoin/market_chart/?vs_currency=usd&days=60
export const getCoinDataByIdApi = async (symbol: String) => {
    const header = {
        "x-cg-demo-api-key": "CG-BsK5K8jame6HvBvpT79MDTqD"
    }
    const response = await axios.get(`${link}/bitcoin/market_chart/?vs_currency=usd&days=60`, { headers: header });

    return response;
};

