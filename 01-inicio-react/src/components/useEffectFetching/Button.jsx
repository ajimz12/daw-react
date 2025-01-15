import cart from "../../assets/cart.png";

const Button = (props) => {
  const { className, onClick } = props;
  return (
    <>
      <button className={className} onClick={onClick}>
        <img src={cart} alt="cart" className="w-6 h-6 mr-2" />
        {props.children}
      </button>
    </>
  );
};

export default Button;
