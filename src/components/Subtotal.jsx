import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom"; // v6

function Subtotal() {
  const navigate = useNavigate(); // React Router v6 navigation
  const [{ basket }] = useStateValue();

  const proceedToCheckout = () => {
    navigate("/checkout"); // navigate to checkout page
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
