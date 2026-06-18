import { Log } from 'logging-middleware';

export interface Notification {
    id: string;
    title: string;
    message: string;
    createdAt: Date;
}

const db: Notification[] = []; // simple in-memory DB

export class NotificationService {
    getAll(): Notification[] {
        Log('backend', 'info', 'service', 'Retrieving notifications from DB');
        return db;
    }

    create(title: string, message: string): Notification {
        Log('backend', 'info', 'service', `Adding new notification to DB: ${title}`);
        const newNotif: Notification = {
            id: Date.now().toString(),
            title,
            message,
            createdAt: new Date()
        };
        db.push(newNotif);
        return newNotif;
    }
}
