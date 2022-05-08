import { Box, TextField, Typography, Button, styled } from "@mui/material";
import React, { useState } from "react";

const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h4,
  & > div,
  & > Button {
    margin-top: 30px;
  }
`;

const NewTransaction = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount, //it returns string so we need to use + sign so that it gets converted to integer
    };
    setTransactions((prevState) => [transaction, ...prevState]);
  };
  return (
    <ContainerBox>
      <Typography variant="h4">New Transaction</Typography>
      <TextField
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transaction
      </Button>
    </ContainerBox>
  );
};

export default NewTransaction;
