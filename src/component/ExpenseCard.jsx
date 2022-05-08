import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const ContainerBox = styled(Box)`
  display: flex;
  width: 100%;

  & > div {
    flex: 1;
    padding: 15px;
    margin: 5px;
  }
`;

const ExpenseCard = ({ transactions }) => {
  const amount = transactions.map((transactions) => transactions.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, val) => (acc += val), 0);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, val) => (acc += val), 0) *
    -1;

  return (
    <ContainerBox>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: "35px" }}>Income</Typography>
          <Typography sx={{ color: "green", fontSize: "30px" }}>
            €{income}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: "35px" }}>Expense</Typography>
          <Typography sx={{ color: "red", fontSize: "30px" }}>
            €{expense}
          </Typography>
        </CardContent>
      </Card>
    </ContainerBox>
  );
};

export default ExpenseCard;
