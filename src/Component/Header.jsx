import { NavLink } from "react-router-dom";
import "./header.css";
import flipkart from "./img/flipkart-logo.png";
import plus1 from "./img/plus.png";
import Offers from "./img/1.webp";
import Grocery from "./img/2.webp";
import mobile from "./img/mobiles.webp";
import fashions from "./img/fashion.webp";
import electronic from "./img/electronics.webp";
import homes from "./img/home.webp";
import appliance from "./img/appliances.webp";
import travels from "./img/travel.webp";
import toy from "./img/toys.webp";

function Header() {
  return (
    <>
      <header>
        <input id="header-toggle" type="checkbox" />
        <div className="logo10">
          <NavLink className="logo" to="/">
            <img src={flipkart} alt="flipkart-logo" />
            <div>
              <i>
                Explore <span>Plus</span>
              </i>
              <img src={plus1} alt="plus" />
            </div>
          </NavLink>
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="Search for products, brands and more"
              />
              <button type="submit" class="searchButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 18"
                  class=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#2874F1" fill-rule="evenodd">
                    <path
                      class=""
                      d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                    ></path>
                    <path
                      class=""
                      d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <ul className="login-button">
            <li className="login1">
              <NavLink to="/contact">
                <i className="fa fa-plus-square plus-icon1"></i>
              </NavLink>
              <NavLink to="/contact">
                <i className="fa fa-shopping-cart shopping-icon1"></i>
              </NavLink>
              <a href="/">Login</a>
              <div className="loginpage">
                <ul className="ulfir">
                  <li>
                    <div className="sign-up-width">
                      <div>New Customer?</div>
                      <NavLink to="/about">Sign Up</NavLink>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <i class="fa fa-user"></i> &nbsp; <span>My Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <i class="fa fa-plus-square"></i> &nbsp;{" "}
                      <span>Flipkart Plus Zone</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <i class="fa fa-credit-card"></i> &nbsp;{" "}
                      <span>Orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <i class="fa fa-heart"></i> &nbsp; <span>Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <i class="fa fa-credit-card-alt"></i> &nbsp;{" "}
                      <span>Rewards</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <ul className="links">
          <li className="display-no-1">
            <NavLink to="/"> Become a Seller</NavLink>
          </li>
          <li className="log-1 display-blo-2">
            <NavLink to="/">
              <i class="fa fa-user"></i> &nbsp; &nbsp; Login & Signup
            </NavLink>
            <img
              className="img1-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFKqx54Cwd6lpsAqHaYARMG92XOj2QUuASgqti45lhfoi_NXFMfH-OW38Y4PSBA300w&s"
              alt="logo"
            />
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-commenting"></i> &nbsp; SuperCoin Zone
            </NavLink>
          </li>
          <li className="display-blo-2 border_bot">
            <NavLink to="/">
              <i class="fa fa-plus-square"></i> &nbsp; Flipkart Plus Zone
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-windows"></i> &nbsp; All Categories
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-hospital-o"></i> &nbsp; Trending Stores{" "}
              <span className="span10">New</span>
            </NavLink>
          </li>
          <li className="display-blo-2 border_bot">
            <NavLink to="/">
              <i class="fa fa-snowflake-o"></i> &nbsp; More on Flipkart
            </NavLink>
          </li>
          <li className="display-blo-2 border_bot">
            <NavLink to="/">
              <i class="fa fa-language"></i> &nbsp; Choose Language
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-percent"></i> &nbsp; Offer Zone
            </NavLink>
          </li>
          <li className="display-blo-2 border_bot">
            <NavLink to="/">
              <i class="fa fa-shopping-bag"></i> &nbsp; Sell on Flipkart
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-credit-card"></i> &nbsp; My Orders
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-tag"></i> &nbsp; My Rewards
            </NavLink>
          </li>
          <li className="display-no-1 nav-more">
            <NavLink to="/about">
              More
              <svg
                width="5"
                height="8"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                class="iconup0"
              >
                <path
                  className="iconup2"
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#fff"
                ></path>
              </svg>
            </NavLink>
            <div className="morepage">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">
                    {" "}
                    <i class="fa fa-bell"></i> &nbsp;{" "}
                    <span>Desktop Notifications</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    {" "}
                    ☏ &nbsp; <span>24x7 Customer Care</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    {" "}
                    ✜ &nbsp; <span>Advertise</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    {" "}
                    <i class="fa fa-download"></i> &nbsp;{" "}
                    <span>Download App</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/contact">
              <i class="fa fa-shopping-cart"></i>&nbsp;My Cart
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-heart"></i> &nbsp; My Wishlist
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-user"></i> &nbsp; My Account
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">
              <i class="fa fa-bell"></i> &nbsp; My Notifications
            </NavLink>
          </li>
          <li className="display-blo-2 border_bot">
            <NavLink to="/">
              <i class="fa fa-comments"></i> &nbsp; My Chats
            </NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/"> Notification Preferences</NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/"> Help Centre</NavLink>
          </li>
          <li className="display-blo-2">
            <NavLink to="/">Legal</NavLink>
          </li>
        </ul>
        <label for="header-toggle" class="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </header>

      <nav id="mainnav">
        <ul className="menu">
          <li className="home">
            <NavLink to="/topoffers">
              <img className="header_icon_img" src={Offers} alt="Offers" />
              <div>Top Offers</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <img className="header_icon_img" src={Grocery} alt="Grocery" />
              <div>Grocery</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobile">
              <img className="header_icon_img" src={mobile} alt="Mobiles" />
              <div>Mobiles</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tshart">
              <img className="header_icon_img" src={fashions} alt="Fashion" />
              <div>
                Fashion
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconup1"
                >
                  <path
                    className="iconup2"
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <div class="submenu">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              <ul className="ulsec">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/electronics">
              <img
                className="header_icon_img"
                src={electronic}
                alt="Electronics"
              />
              <div>
                Electronics
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconup1"
                >
                  <path
                    className="iconup2"
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <div class="submenu">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              <ul className="ulsec">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/homes">
              <img className="header_icon_img" src={homes} alt="home" />
              <div>
                Home
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconup1"
                >
                  <path
                    className="iconup2"
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <div class="submenu">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              <ul className="ulsec">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/appliances">
              <img
                className="header_icon_img"
                src={appliance}
                alt="Appliances"
              />
              <div>
                Appliances
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconup1"
                >
                  <path
                    className="iconup2"
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <div class="submenu">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              <ul className="ulsec">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/travel">
              <img className="header_icon_img" src={travels} alt="Travel" />
              <div>Travel</div>
            </NavLink>
          </li>
          <li className="toys">
            <NavLink to="/toys">
              <img className="header_icon_img" src={toy} alt="Toys" />
              <div>
                Beauty, Toys & More
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  class="iconup1"
                >
                  <path
                    className="iconup2"
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </NavLink>
            <div class="submenu">
              <ul className="ulfir">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
              <ul className="ulsec">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
