import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Log } from 'logging-middleware';

export const NotificationList = ({ notifications }) => {
    Log('frontend', 'debug', 'component', 'Rendering NotificationList');
    return (
        <List>
            {notifications.map((notif) => (
                <ListItem key={notif.id} divider>
                    <ListItemText primary={notif.title} secondary={notif.message} />
                </ListItem>
            ))}
            {notifications.length === 0 && (
                <Typography variant="body2" color="textSecondary">No notifications yet.</Typography>
            )}
        </List>
    );
};
