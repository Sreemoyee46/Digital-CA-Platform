import React from 'react';

const reminders = [
  { id: 1, title: 'GST Filing Due', dueDate: '2024-07-15' },
  { id: 2, title: 'PAN Card Renewal', dueDate: '2024-08-01' },
  { id: 3, title: 'TDS Payment Reminder', dueDate: '2024-07-20' },
];

function ComplianceReminderCards() {
  return (
    <section className="compliance-reminder-cards">
      <h3>Compliance Reminders</h3>
      <div className="cards-container">
        {reminders.map((reminder) => (
          <div key={reminder.id} className="reminder-card">
            <h4>{reminder.title}</h4>
            <p>Due Date: {reminder.dueDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComplianceReminderCards;
