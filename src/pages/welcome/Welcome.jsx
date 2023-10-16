import React from 'react';
import './Welcome.css';
import NavBar from '../../components/NavBar';

const Welcome = () => {
  return (
    <div>
      <NavBar />
      <div className="welcome-text">
        <h1>Welcome to Quantum Financial Services!</h1>
        <p>
          At Quantum Financial Services, we understand that your financial well-being is a journey, not a destination. Our mission is to accompany you every step of the way, providing you with the guidance, tools, and expertise needed to reach your financial goals.
        </p>
        <p style={{ fontWeight: 'bold', color: '#0047AB' }}>Why Choose Quantum Financial Services:</p>
        <p>
          <strong>Personalized Solutions:</strong> We believe in the power of personalized financial strategies. Our team works closely with you to create a plan that aligns with your unique goals, whether it's saving for retirement, buying a home, or investing for the future.
        </p>
        <p>
          <strong>Expert Financial Advisors:</strong> Our dedicated financial advisors bring years of experience to the table. They stay updated with the latest financial trends and market dynamics to provide you with informed and intelligent advice.
        </p>
        <p>
          <strong>Comprehensive Services:</strong> From wealth management and tax planning to estate planning and risk management, we offer a comprehensive suite of financial services to cover all aspects of your financial life.
        </p>
        <p>
          <strong>Financial Education:</strong> We believe that knowledge is empowerment. That's why we offer educational resources, seminars, and workshops to help you enhance your financial literacy and make confident decisions.
        </p>
        <p style={{ fontWeight: 'bold', color: '#0047AB' }}>Your Financial Partner for Life:</p>
        <p>
          When you choose Quantum Financial Services, you're not just getting a financial advisor; you're gaining a lifelong partner committed to your financial success. We adapt to your changing needs, ensuring your financial plan evolves as you do.
        </p>
        <p style={{ fontWeight: 'bold', color: '#0047AB' }}>Our Core Values:</p>
        <p>Our values guide everything we do:</p>
        <p>
          <strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in our interactions with clients.
        </p>
        <p>
          <strong>Excellence:</strong> We strive for excellence in all our services, seeking to deliver outstanding results.
        </p>
        <p>
          <strong>Client-Centric:</strong> Your best interests are our priority, and we work tirelessly to help you achieve your financial goals.
        </p>
        <p>
          <strong>Continuous Improvement:</strong> We are committed to continuous learning and improvement to provide you with the best financial solutions.
        </p>
        <p style={{ fontWeight: 'bold', color: '#0047AB' }}>Get Started Today:</p>
        <p>
          Ready to take control of your financial future? Whether you're planning for retirement, saving for your child's education, or simply looking to grow your wealth, <span style={{ color: '#0047AB' }}>Quantum Financial Services</span> is here to help. <a href="#" className="hover:underline">Contact us today</a> to schedule a consultation and start your journey towards financial prosperity.
        </p>
      </div>

      <div className="user-info-container">
        <h2 style={{ color: '#0047AB' }}>Explore Our Website's Key Features</h2>
        <p>Quantum Financial Services offers a wide range of financial tools and resources to help you take control of your financial future. Here are some of the key features you can access on our website:</p>
        <div className="feature">
          <h3 style={{ color: '#0047AB' }}>Budgeting Made Easy</h3>
          <p>Our budgeting tool allows you to create and manage your budgets effortlessly. Track your income, expenses, and savings goals in one place. Say goodbye to financial stress and hello to financial clarity.</p>
        </div>
        <div className="feature">
          <h3 style={{ color: '#0047AB' }}>Mortgage Calculations</h3>
          <p>Planning to buy a home? Use our mortgage calculator to estimate your monthly payments, explore different loan options, and make informed decisions about one of the most significant investments of your life.</p>
        </div>
        <div className="feature">
          <h3 style={{ color: '#0047AB' }}>Financial Calculators</h3>
          <p>Our suite of financial calculators covers everything from retirement planning and investment growth to loan amortization and debt payoff. Empower yourself with the tools you need to make smart financial choices.</p>
        </div>
        <div className="feature">
          <h3 style={{ color: '#0047AB' }}>Find Our Locations</h3>
          <p>Locate our nearest branch or ATM easily using our location finder. Access directions, opening hours, and contact information to ensure you can reach us whenever you need assistance.</p>
        </div>
        <div className="feature">
          <h3 style={{ color: '#0047AB' }}>Product Purchasing Cart</h3>
          <p>Explore a wide range of financial products and services available through Quantum Financial Services. Add products to your cart, review your selections, and proceed with secure online purchases.</p>
        </div>
        <p>Whether you're starting your financial journey, planning for a major life event, or seeking to optimize your investments, <span style={{ color: '#0047AB' }}>Quantum Financial Services</span> is your trusted partner every step of the way. <span style={{ color: '#0047AB' }}>Welcome to a world of financial empowerment!</span></p>
      </div>
    </div>
  );
};

export default Welcome;
