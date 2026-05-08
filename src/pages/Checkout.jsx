import { useState } from 'react';
import { CreditCard, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Checkout.css';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="checkout-page">
      <div className="container checkout-container">
        
        {/* Progress Tracker */}
        <div className="checkout-progress">
          <div className="progress-step completed">Cart <ChevronIcon /></div>
          <div className="progress-step completed">Shipping <ChevronIcon /></div>
          <div className="progress-step active">Payment</div>
        </div>

        <div className="checkout-grid">
          {/* Left Column: Form */}
          <div className="checkout-form-area">
            <h2 className="form-section-title">Shipping Details</h2>
            <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group full-width">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group full-width">
                <label>Address</label>
                <input type="text" placeholder="123 Innovation Drive" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="San Francisco" />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input type="text" placeholder="94103" />
                </div>
              </div>

              <h2 className="form-section-title mt-40">Payment Method</h2>
              <div className="payment-options">
                <label className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'card'} 
                    onChange={() => setPaymentMethod('card')} 
                  />
                  <span className="radio-custom"></span>
                  <div className="method-label">
                    <CreditCard size={20} /> Credit Card
                  </div>
                </label>
                <label className={`payment-method ${paymentMethod === 'paypal' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'paypal'} 
                    onChange={() => setPaymentMethod('paypal')} 
                  />
                  <span className="radio-custom"></span>
                  <div className="method-label">
                    <span className="paypal-logo">PayPal</span>
                  </div>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group full-width">
                    <label>Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary btn-submit">
                Complete Purchase
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="order-summary-area">
            <div className="order-card">
              <h3>Order Summary</h3>
              
              <div className="order-item">
                <div className="item-thumb">
                  {/* Item Image Placeholder */}
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Expert IoT Kit" />
                </div>
                <div className="item-details">
                  <h4>Expert IoT Module & Hardware Kit</h4>
                  <div className="item-price">$149.00</div>
                </div>
              </div>

              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>$149.00</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span className="text-sage">Free</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>$149.00</span>
                </div>
              </div>

              <div className="trust-badges">
                <div className="trust-badge">
                  <Lock size={16} /> SSL Encrypted
                </div>
                <div className="trust-badge">
                  <ShieldCheck size={16} /> 30-day Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, margin: '0 8px' }}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
