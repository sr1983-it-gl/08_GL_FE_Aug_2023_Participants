
import { useEffect } from "react";
import { getAllExpenseItems } from "../services/expense_utils";

import {useState} from 'react'

import {ExpenseItems} from './ExpenseItems'

import {Container} from 'react-bootstrap'
import { ExpenseCreator } from "./ExpenseCreator";

const Home = () => {  
  
  const [expenseItems, setExpenseItems] = useState([])

    useEffect( () => {
  
      const getAllItemsInvoker = async () => {
  
        const response = await getAllExpenseItems();
        console.log("Response is " + JSON.stringify(response));

        setExpenseItems(response)
      }
  
      getAllItemsInvoker();
  
    }, [])
  
  
  return (
    <Container>

    {
            <ExpenseCreator></ExpenseCreator>

      }

      <h2>Expense Items</h2>
      {
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
      }

    </Container>
  )
}

export {Home}