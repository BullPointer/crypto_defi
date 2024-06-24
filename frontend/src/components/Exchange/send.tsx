/* eslint-disable react/prop-types */
import { Icon } from "@iconify-icon/react";
import { useHomeExchangeContext } from "../../context/HomeExchangeContext";
import CryptoList from "./cryptList";

const Send = () => {
  const {
    send,
    error,
    showList,
    range,
    handleAmount,
    handleFocus,
    selectCoin,
  } = useHomeExchangeContext();

  return (
    <>
      {selectCoin == "send" && <CryptoList type={"send"} />}
      <div className="exchange">
        <div className="selling">
          <p style={{ color: "#fff" }}>You send</p>
          {range && (
            <p>
              Available:
              <span style={{ color: "yellow" }}> {range} </span>
              <span style={{ color: "yellow" }}>
                {send.symbol.toUpperCase()}
              </span>
            </p>
          )}
        </div>
        <div className="bitcoin">
          <div
            className="select cursor-pointer"
            onClick={() => showList("send")}
          >
            <div className="symbol">{send.symbol.toUpperCase()}</div>
            <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
          </div>
          <input
            name="send"
            className="amount"
            type="text"
            value={send.amount}
            onChange={handleAmount}
            onFocus={handleFocus}
          />
        </div>
        {error && <div className="value-error">{error}</div>}
        <div className="selling">
          <p>Current Rate</p>
          <p>
            <span style={{ color: "green" }}>1 {send.symbol}= 27.536.20</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Send;
