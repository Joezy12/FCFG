
function Card() {
    const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment submitted successfully!');
    // Here you would normally send the data to a server
  };
  return (
    <section>
          <form className="payment-form" onSubmit={handleSubmit}>
      <label>
        Cardholder Name
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Card Number
        <input
          type="text"
          name="cardNumber"
          maxLength="16"
          pattern="\d{16}"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
      </label>

      <div className="row">
        <label>
          Expiry Date
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            pattern="\d{2}/\d{2}"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          CVV
          <input
            type="password"
            name="cvv"
            maxLength="4"
            pattern="\d{3,4}"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit">Pay Now</button>
    </form>
    </section>
  )
}

export default Card();
