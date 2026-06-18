import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Log } from 'logging-middleware';

export const NotificationForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Log('frontend', 'info', 'component', 'Submitting new notification form');
        if (!title || !message) {
            Log('frontend', 'warn', 'component', 'Form submission missing fields');
            return;
        }
        onAdd(title, message);
        setTitle('');
        setMessage('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
            <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required multiline rows={3} />
            <Button type="submit" variant="contained">Send Notification</Button>
        </Box>
    );
};
