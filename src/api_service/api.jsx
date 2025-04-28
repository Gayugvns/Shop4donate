class Api{

    constructor() {
        this.baseUrl = 'https://api.example.com'; // Replace with your API base URL
    }
    
    async fetchData(endpoint) {
        try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
        }
    }

}