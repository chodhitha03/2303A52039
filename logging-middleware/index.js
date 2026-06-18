let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYXJpcGVsbGljaG9kaGl0aGFAZ21haWwuY29tIiwiZXhwIjoxNzgxNzY4NjA4LCJpYXQiOjE3ODE3Njc3MDgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MWNhMmIzNy0xMjkzLTRkZTMtOWU4Yy1kZDMwMmJjMGUxMWEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYXJpcGVsbGkgY2hvZGhpdGhhIiwic3ViIjoiZjM1MDQ5ZTQtOGQzYS00MGYzLThjNmEtMTViMDhjYjNhY2M5In0sImVtYWlsIjoibWFyaXBlbGxpY2hvZGhpdGhhQGdtYWlsLmNvbSIsIm5hbWUiOiJtYXJpcGVsbGkgY2hvZGhpdGhhIiwicm9sbE5vIjoiMjMwM2E1MjAzOSIsImFjY2Vzc0NvZGUiOiJiRHJlQXEiLCJjbGllbnRJRCI6ImYzNTA0OWU0LThkM2EtNDBmMy04YzZhLTE1YjA4Y2IzYWNjOSIsImNsaWVudFNlY3JldCI6InBIUFNZQkJLaFF3bVljUGsifQ.UNh8I_kx5bSiaAa7lJavE6gcY4qn-Md5NVDe5ZNoV10';

/**
 * Set the authorization token to be used for logging requests
 * @param {string} token 
 */
export const setAuthToken = (token) => {
    authToken = token;
};

/**
 * Reusable logging function
 * @param {string} stack - e.g., "frontend" or "backend"
 * @param {string} level - e.g., "error", "info", "fatal"
 * @param {string} pkg - e.g., "handler", "db", "auth"
 * @param {string} message - A descriptive log message
 */
export const Log = async (stack, level, pkg, message) => {
    // Print locally for debugging
    console.log(`[${stack}] [${level}] [${pkg}]: ${message}`);

    if (!authToken) {
        console.warn('Logging Middleware: No auth token set. Cannot send log to test server.');
        return;
    }

    try {
        const response = await fetch('http://4.224.186.213/evaluation-service/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}` // Token needs to be injected
            },
            body: JSON.stringify({
                stack: stack,
                level: level,
                package: pkg,
                message: message
            })
        });

        if (!response.ok) {
            console.error('Logging Middleware: Failed to send log. Status:', response.status);
        }
    } catch (error) {
        console.error('Logging Middleware: Error making API call', error);
    }
};

export default { Log, setAuthToken };
