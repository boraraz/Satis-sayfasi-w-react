import classes from "./Cart.module.css";

function CartItems() {
  return (
    <div className={classes.full}>
      <div className={classes.disp}>Products on the cart</div>
      <div className={classes.cartTotal}>Cart Total Sidebar</div>
    </div>
  );
}

export default CartItems;
