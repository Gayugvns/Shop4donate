class ApiHelper {
 

  async postData(endpoint, data) {
    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Post error:', error);
      throw error;
    }
  }

}