
import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense_utils";

const Home = () => {  
  
    useEffect( () => {
  
      const getAllItemsInvoker = async () => {
  
        const response = await getAllExpenseItems();
        console.log("Response is " + JSON.stringify(response));
      }
  
      getAllItemsInvoker();
  
    }, [])
  
  
  return (
    <div>
      Expense Manager App - Home Component
    </div>
  )
}

export {Home}