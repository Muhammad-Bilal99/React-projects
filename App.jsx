
export default function App() {
  return<>
  <body>
    <main className="main-container">
      <div className="image"></div>
      <div className="text-container">
        <h2>Order Summary</h2>
        <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div className="annual-plan-container">
          <div className="img"></div>
          <div className="plan">Annual Plan <span>$59.99/year</span></div>
          <a href="">Change</a>
        </div>
        <div className="btn-container">
          <button className="proceed">Proceed to Payment</button>
          <button className="cancel">Cancel Order</button>
        </div>
      </div>
    </main>
  </body>
  </>
}