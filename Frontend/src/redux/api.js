// ======================== [ login api ] ========================
export const loginApi = async (credentials) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}auth/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }

    return response.json();
};
// ======================== [ login api ] ========================