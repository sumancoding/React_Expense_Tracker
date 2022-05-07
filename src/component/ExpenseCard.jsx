import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const ContainerBox = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 15px;
  }
`;

const ExpenseCard = () => {
  return (
    <ContainerBox>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: "35px" }}>Income</Typography>
          <Typography sx={{ color: "green", fontSize: "30px" }}>25</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: "35px" }}>Expense</Typography>
          <Typography sx={{ color: "red", fontSize: "30px" }}>50</Typography>
        </CardContent>
      </Card>
    </ContainerBox>
  );
};

export default ExpenseCard;
