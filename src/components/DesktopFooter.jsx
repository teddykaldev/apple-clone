import "./DesktopFooter.css";

function DesktopFooter() {
  return (
    <div className="desktop-footer-container">
       <div className="paragraph-container">
            <p>
                Apple Upgrade is a device leasing program available in the U.S. (excluding U.S. territories).
                Leases are provided by Klarna: subject to eligibility and credit approval, including final 
                approval at checkout. To be eligible, you must be a U.S. resident, at least 18 years old 
                (or the legal age in your state), have an accepted credit or debit card, and have an Apple Account.
                Additional eligibility criteria apply. Device must be in good condition upon return; damage fees may apply.
                For iPhone only: In order to lease an iPhone, you must select an eligible carrier (but you cannot use a prepaid carrier plan).
                Upgrades require entering into a new lease and are subject to eligibility and credit approval.
                Apple Upgrade is not available on refurbished devices or online at the following special stores: 
                Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for 
                small businesses or enterprises; Government, Education, or Veterans and Military Purchase Programs.
            </p>
       </div> 
       <hr />
       <div className="apple-terms-list-container">
             
            <div className="shop-container">
                <h2>Shop and Learn</h2>
                <ul>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Tv</a></li>
                    <li><a href="#">music</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">HomePod</a></li>
                    <li><a href="#">ipod touch</a></li>
                    <li><a href="#">AirTag</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Gift Cards</a></li>
                </ul>
            </div>

            <div className="ServicesandAccount-container">
                <div className="services-container">
                    <h2>Services</h2>
                    <ul>
                    <li><a href="#">Apple Music</a></li>
                    <li><a href="#">Apple Tv+</a></li>
                    <li><a href="#">Apple Fitness+</a></li>
                    <li><a href="#">Apple News+</a></li>
                    <li><a href="#">Apple Arcade</a></li>
                    <li><a href="#">ICloud</a></li>
                    <li><a href="#">Apple One</a></li>
                    <li><a href="#">Apple Card</a></li>
                    <li><a href="#">Apple Books</a></li>
                    <li><a href="#">Apple Podcasts</a></li>
                    <li><a href="#">App Store</a></li>
                   </ul>
                </div>
                <div className="account-container">
                    <h2>Account</h2>
                    <ul>
                        <li><a href="#">Manage Your Apple ID</a></li>
                        <li><a href="#">Apple Store Account</a></li>
                        <li><a href="#">iCloud.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="apple-store-container">
                <h2>Apple Store</h2>
                <ul>
                    <li><a href="#">Find a Store</a></li>
                    <li><a href="#">Shop Online</a></li>
                    <li><a href="#">Genius Bar</a></li>
                    <li><a href="#">Today at Apple</a></li>
                    <li><a href="#">Apple Store App</a></li>
                    <li><a href="#">Apple Camp</a></li>
                    <li><a href="#">Refurbished and Clearance</a></li>
                    <li><a href="#">Financing</a></li>
                    <li><a href="#">Apple Trade in</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Shopping Help</a></li>
                </ul>
            </div>
            <div className="business-government-cont">
                <div className="business-container">
                    <h2>For Business</h2>
                    <ul>
                        <li><a href="#">Apple and Business</a></li>
                        <li><a href="#">Shop for Business</a></li>
                    </ul>
                </div>
                <div className="education-container">
                    <h2>For Education</h2>
                    <ul>
                        <li><a href="#">Apple and Education</a></li>
                        <li><a href="#">Shop for k-12</a></li>
                        <li><a href="#">Shop for College</a></li>
                    </ul>
                </div>
                <div className="healthcare-cont">
                    <h2>For Healthcare</h2>
                    <ul>
                        <li><a href="#">Apple in Healthcare</a></li>
                        <li><a href="#">Healthcare on Apple Watch</a></li>
                        <li><a href="#">Healthcare Records on iPhone</a></li>
                    </ul>
                </div>
                <div className="government-cont">
                    <h2>For Government</h2>
                    <ul>
                        <li><a href="#">Shop for Government</a></li>
                        <li><a href="#">Shop for Vetarns and Military</a></li>
                    </ul>
                </div>
            </div>
            <div className="ValuesandAbout-cont">
                <div className="values-cont">
                    <h2>Apple Values</h2>
                    <ul>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Inclusion and Diversity</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Racial Equity and Justice</a></li>
                        <li><a href="#">Supplier Responsibility</a></li>
                    </ul>
                </div>
                <div className="about-cont">
                    <h2>About Apple</h2>
                    <ul>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple Leadership</a></li>
                        <li><a href="#">Career Opportunities</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Ethics & Compliance</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Apple</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <p id="paragraph-more">
            More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call <a href="#">1-800-MY-APPLE</a>(1-800-692-7753).
        </p>
        <hr />
        <div className="dfooter-copy">
            <p>copyright &copy; 2025 Apple Inc.All rights reserved.</p>
           <div className="dfoter-terms">
              <nav>
                <a href="#">Privacy Policy</a>|<a href="#">Terms of Use</a>|
                <a href="#">Sales and Refunds</a>|<a href="#">Legal</a>|
                <a href="#">Site Map</a>
              </nav>
           </div>
             <p>United States</p>
        </div>

    </div>
  )
}
export default DesktopFooter;