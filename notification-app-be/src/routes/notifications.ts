import { Router } from 'express';
import { getNotifications, createNotification } from '../controllers/notifications.js';
import { Log } from 'logging-middleware';

const router = Router();

router.get('/', (req, res, next) => {
    Log('backend', 'info', 'route', 'Routing to getNotifications handler');
    next();
}, getNotifications);

router.post('/', (req, res, next) => {
    Log('backend', 'info', 'route', 'Routing to createNotification handler');
    next();
}, createNotification);

export default router;
