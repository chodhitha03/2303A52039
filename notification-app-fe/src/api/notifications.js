import { Log } from 'logging-middleware';

export const fetchNotifications = async () => {
    Log('frontend', 'info', 'api', 'Fetching notifications from backend');
    const res = await fetch('http://localhost:3001/api/notifications');
    return res.json();
};

export const createNotification = async (title, message) => {
    Log('frontend', 'info', 'api', 'Sending new notification to backend');
    const res = await fetch('http://localhost:3001/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, message })
    });
    return res.json();
};
