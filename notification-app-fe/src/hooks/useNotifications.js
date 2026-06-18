import { useState, useEffect } from 'react';
import { fetchNotifications, createNotification } from '../api/notifications.js';
import { Log } from 'logging-middleware';

export const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    const loadNotifications = async () => {
        Log('frontend', 'info', 'hook', 'Loading notifications');
        const data = await fetchNotifications();
        setNotifications(data);
    };

    const addNotification = async (title, message) => {
        Log('frontend', 'info', 'hook', 'Adding notification');
        await createNotification(title, message);
        loadNotifications();
    };

    useEffect(() => {
        loadNotifications();
    }, []);

    return { notifications, addNotification };
};
