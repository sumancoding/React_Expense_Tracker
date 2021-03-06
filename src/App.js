import React, { useState } from "react";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./component/Balance";
import ExpenseCard from "./component/ExpenseCard";
import NewTransaction from "./component/NewTransaction";
import Transaction from "./component/Transaction";

const StyledHeading = styled(Typography)`
  font-size: 50px;
  text-align: center;
  color: lightseagreen;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  background: lightgrey;
  width: 800px;
  padding: 10px;
  border-radius: 10px;
  margin: auto;

  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -100 },
    { id: 2, text: "Salary", amount: 10000 },
    { id: 3, text: "Phone", amount: -2000 },
    { id: 4, text: "Bonus", amount: 1000 },
  ]);
  return (
    <Box sx={{ bgcolor: "white", height: "100vh" }}>
      <StyledHeading>expense tracker</StyledHeading>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transaction
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Box>
      </Component>
    </Box>
  );
};

export default App;
