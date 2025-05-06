export const refreshToken = async () => {
    const token = localStorage.getItem('refreshToken');

    const response = await fetch('http://localhost:8080/api/auth/refreshToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: token }),
    });

    if (!response.ok) {
        throw new Error('Refresh token failed');
    }

    return response.json(); // { accessToken: string, refreshToken: string }
};