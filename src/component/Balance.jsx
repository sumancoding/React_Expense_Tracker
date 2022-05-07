import React from "react";
import { Box, Typography, styled } from "@mui/material";

const BalanceText = styled(Typography)`
  font-size: 30px;
  text-align: center;
`;

const Balance = () => {
  return (
    <Box>
      <BalanceText>Balance: 50</BalanceText>
    </Box>
  );
};

export default Balance;
