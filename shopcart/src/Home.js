import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Items } from "./displayProducts";

export const Home = (props) => {
  return (
    <div>
      <Items
        itemList={props.itemList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
      />
    </div>
  );
};

export default Home;