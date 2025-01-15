export const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/orders');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  