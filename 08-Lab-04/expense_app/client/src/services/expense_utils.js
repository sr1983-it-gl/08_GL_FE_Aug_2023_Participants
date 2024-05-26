import axios from "axios"

const getAllExpenseItems = async () => {
  
  const getItemsUrl = "http://localhost:4000/expenses";
  
  console.log("Final Url is " + getItemsUrl);
  
  const response = await axios.get(getItemsUrl);
  return response.data;

} 
export {getAllExpenseItems};
