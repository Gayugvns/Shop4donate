// src/pages/Notifications.jsx
const notifications = [
    { id: 1, message: "Your donation to 'Clean Water Initiative' was successful.", time: "2h ago" },
    { id: 2, message: "New badge unlocked: Silver Impact Maker", time: "1 day ago" },
    { id: 3, message: "You have a new reward available.", time: "3 days ago" },
  ];
  
  const Notifications = () => {
    return (
      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li key={note.id} className="bg-gray-50 p-4 rounded shadow-sm">
              <p>{note.message}</p>
              <span className="text-xs text-gray-500">{note.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notifications;
  