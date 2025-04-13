import React from "react";

const Intro = () => {
  return (
    <div className="intro-section">
      <section className="header">
        <h1>Conference Expense Planner</h1>
        <p>Plan your next major event with us!</p>
        <button>Get Started</button>
      </section>
      <section className="description">
        <p>
          <strong>Welcome to BudgetEase Solutions</strong>, your trusted partner
          in simplifying budget management and financial solutions. At
          BudgetEase, we understand the importance of effective budget planning
          and strive to provide intuitive, user-friendly solutions to meet the
          diverse needs of our clients.
        </p>
        <p className="mb-4">
          <strong>With a commitment to efficiency and innovation</strong>, we
          empower individuals and businesses to take control of their finances
          and achieve their goals with ease.
        </p>
      </section>
    </div>
  );
};

export default Intro