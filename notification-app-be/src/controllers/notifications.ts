import { Request, Response } from 'express';
import { NotificationService } from '../services/notifications.js';
import { Log } from 'logging-middleware';

const service = new NotificationService();

export const getNotifications = (req: Request, res: Response) => {
    Log('backend', 'info', 'controller', 'Fetching all notifications');
    try {
        const data = service.getAll();
        res.status(200).json(data);
    } catch (err: any) {
        Log('backend', 'error', 'controller', `Failed to fetch notifications: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createNotification = (req: Request, res: Response) => {
    Log('backend', 'info', 'controller', 'Creating new notification');
    try {
        const { title, message } = req.body;
        if (!title || !message) {
            Log('backend', 'warn', 'controller', 'Missing title or message in request body');
            res.status(400).json({ error: 'Title and message are required' });
            return;
        }
        
        const newNotif = service.create(title, message);
        res.status(201).json(newNotif);
    } catch (err: any) {
        Log('backend', 'error', 'controller', `Failed to create notification: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
