import React from 'react';
import { Container, Typography } from '@mui/material';
import { NotificationList } from '../components/NotificationList.jsx';
import { NotificationForm } from '../components/NotificationForm.jsx';
import { useNotifications } from '../hooks/useNotifications.js';
import { Log } from 'logging-middleware';

export const Dashboard = () => {
    Log('frontend', 'info', 'page', 'Rendering Dashboard page');
    const { notifications, addNotification } = useNotifications();

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>Notification Dashboard</Typography>
            <NotificationForm onAdd={addNotification} />
            <NotificationList notifications={notifications} />
        </Container>
    );
};
