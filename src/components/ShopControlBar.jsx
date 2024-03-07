import UserAuth from "./UserAuth";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import '../styles/ShopControlBar.css'

function ShopControlBar() {
    return (
        <div className="shopControlBar">
            <UserAuth />
            <SearchBar />
            <ShoppingCart />
        </div>
    );
}

export default ShopControlBar;