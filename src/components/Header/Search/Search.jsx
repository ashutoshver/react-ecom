import "./Search.css";
import { MdClose } from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-1.webp'

export const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder="Search for products"
            />
            <MdClose className="close-btn1" onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>

                    <div className="prod-details">
                        <span className="name2">product name</span>
                        <span className="desc">product desc</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
