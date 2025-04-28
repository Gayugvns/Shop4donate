// src/pages/Notifications.jsx
import { Bell } from "lucide-react"; // using Lucide icons

const notifications = [
  {
    id: 1,
    message: "Your donation to 'Clean Water Initiative' was successful.",
    time: "2h ago",
    date: "2025-04-24T14:00:00Z",
  },
  {
    id: 2,
    message: "New badge unlocked: Silver Impact Maker",
    time: "1 day ago",
    date: "2025-04-24T14:00:00Z",
  },
  {
    id: 3,
    message: "You have a new reward available.",
    time: "3 days ago",
    date: "2025-04-24T14:00:00Z",
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center mb-6 border-b pb-3">
          <Bell className="text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-blue-700">Notifications</h2>
        </div>
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 p-4 rounded-xl shadow flex justify-between items-start"
            >
              <div>
                <p className="text-blue-800">{note.message}</p>
                <span className="text-xs text-gray-500">{note.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
