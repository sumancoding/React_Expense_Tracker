import { Box, TextField, Typography, Button, styled } from "@mui/material";
import React from "react";

const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h4,
  & > div,
  & > Button {
    margin-top: 30px;
  }
`;

const NewTransaction = () => {
  return (
    <ContainerBox>
      <Typography variant="h4">New Transaction</Typography>
      <TextField label="Enter Expense" />
      <TextField label="Enter Amount" />
      <Button variant="contained">Add Transaction</Button>
    </ContainerBox>
  );
};

export default NewTransaction;
