import React, { useState, useEffect } from 'react';

const AffiliateDonation = () => {
  const [donationAmount, setDonationAmount] = useState(4.0);

  // Simulate dynamic updates to the donation amount
  useEffect(() => {
    const interval = setInterval(() => {
      setDonationAmount((prev) => (prev >= 10 ? 4.0 : prev + 0.5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="affiliate-container">
      <style>
        {`
          .affiliate-container {
            background: linear-gradient(135deg, #1e3a8a, #3b82f6); /* Blue shade gradient */
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            font-family: Arial, sans-serif;
            color: #fff;
          }

          .content-wrapper {
            display: flex;
            gap: 40px;
            max-width: 1200px;
            width: 100%;
          }

          .left-section {
            flex: 1;
          }

          .right-section {
            background: #fff;
            border-radius: 15px;
            padding: 20px;
            width: 450px;
            justify-content: left;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            animation: bounce 0.5s ease-in-out;
          }

          .heading {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            animation: fadeIn 1s ease-in;
            justify-content: left;
            text-align: left;
          }

          .step {
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
          }

          .step:nth-child(1) { animation-delay: 0.2s; }
          .step:nth-child(2) { animation-delay: 0.4s; }
          .step:nth-child(3) { animation-delay: 0.6s; }
          .step:nth-child(4) { animation-delay: 0.8s; }

          .step-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: #a5b4fc;
            margin-right: 10px;
            border-radius: 50%;
          }

          .step-text {
            font-size: 1rem;
            line-height: 1.5;
          }

          .learn-more-btn {
            background: #ec4899;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            transition: transform 0.3s ease;
          }

          .learn-more-btn:hover {
            transform: scale(1.05);
          }

          .item-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e5e7eb;
            color: #000;
             font-weight: bold;
          }

          .commission-earned {
            background: #F0F8FF;
            padding: 10px;
            border-radius: 10px;
            margin: 10px 0;
            color: #000000;
            font-weight: bold;
          }

          .donation-highlight {
            background: #d1fae5;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            color: #000;
            font-weight: bold;
            animation: pulse 1.5s infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0% { transform: translateY(-20px); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <div className="content-wrapper">
        


        {/* Left Section */}
        <div className="left-section">
         
          <h1 className="heading">THE AFFILIATE DONATION CONCEPT</h1>
          <p style={{ marginBottom: '30px', opacity: 0.9, justifyContent: 'left', textAlign: 'left' , marginRight: '30px', fontSize: '1.2rem'}}>    
            WE’VE partnered with top e-commerce platforms to redirect a portion of their affiliate commissions to causes you care about.
          </p>

          <div className="step">
            <span className="step-number">1</span>
            <span className="step-text">
              <strong>YOU SHOP NORMALLY</strong><br />
              Browse products from your favorite stores through the platform at the same prices.
            </span>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <span className="step-text">
              <strong>WE EARN COMMISSION</strong><br />
              When you make a purchase, the store pays us a commission – at no extra cost to you.
            </span>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <span className="step-text">
              <strong>DONATIONS ARE MADE</strong><br />
              We donate a significant portion of our commission to causes you choose to support.
            </span>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <span className="step-text">
              <strong>YOU GET RECOGNIZED</strong><br />
              Earn NFT badges based on your impact that you can share on social media.
            </span>
          </div>

          <button className="learn-more-btn">Learn More About Our Process</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="item-row">
            <span>Amazon</span>
            <span>5% Commission</span>
          </div>
          <div className="item-row">
            <span>Wireless Headphones</span>
            <span>$99.99</span>
          </div>
          <div className="commission-earned">
            <div className="item-row">
              <span>Commission Earned</span>
              <span>$5.00</span>
            </div>
            <div className="item-row">
              <span>Donation Amount (80%)</span>
              <span style={{ color: '#dc2626' }}>${donationAmount.toFixed(2)}</span>
            </div>
            <div className="item-row">
              <span>Platform Fee (20%)</span>
              <span>$1.00</span>
            </div>
          </div>
          <div className="donation-highlight">
            Your purchase just donated<br />
            ${donationAmount.toFixed(2)} to Education Fund<br />
            Without costing you anything extra!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDonation;