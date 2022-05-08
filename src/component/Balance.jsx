import React from "react";
import { Box, Typography, styled } from "@mui/material";

const BalanceText = styled(Typography)`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map((transactions) => transactions.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0);
  return (
    <Box>
      <BalanceText>Balance: €{total} </BalanceText>
    </Box>
  );
};

export default Balance;
