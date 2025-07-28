import React from 'react';

const reminders = [
  { 
    id: 1, 
    title: 'GST Filing - ABC Enterprises', 
    dueDate: '2024-01-25',
    priority: 'high',
    client: 'ABC Enterprises Pvt Ltd'
  },
  { 
    id: 2, 
    title: 'TDS Payment - XYZ Solutions', 
    dueDate: '2024-01-31',
    priority: 'medium',
    client: 'XYZ Solutions'
  },
  { 
    id: 3, 
    title: 'IT Return - TechCorp India', 
    dueDate: '2024-02-15',
    priority: 'low',
    client: 'TechCorp India Ltd'
  },
  { 
    id: 4, 
    title: 'PAN Card Renewal - StartupXYZ', 
    dueDate: '2024-02-28',
    priority: 'medium',
    client: 'StartupXYZ'
  },
];

function ComplianceReminderCards() {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ff4444';
      case 'medium': return '#ff8800';
      case 'low': return '#00aa00';
      default: return '#666666';
    }
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="compliance-reminder-cards">
      <h3>Compliance Reminders</h3>
      <div className="cards-container">
        {reminders.map((reminder) => {
          const daysUntilDue = getDaysUntilDue(reminder.dueDate);
          const isOverdue = daysUntilDue < 0;
          const isUrgent = daysUntilDue <= 3;
          
          return (
            <div 
              key={reminder.id} 
              className="reminder-card"
              style={{
                borderLeftColor: getPriorityColor(reminder.priority),
                backgroundColor: isUrgent ? '#fff5f5' : '#f8fbff'
              }}
            >
              <h4>{reminder.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>
                {reminder.client}
              </p>
              <p style={{ 
                color: isOverdue ? '#ff4444' : isUrgent ? '#ff8800' : '#00aa00',
                fontWeight: '600'
              }}>
                {isOverdue 
                  ? `Overdue by ${Math.abs(daysUntilDue)} days` 
                  : `Due in ${daysUntilDue} days`
                }
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ComplianceReminderCards;
