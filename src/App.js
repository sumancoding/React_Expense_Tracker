import React from "react";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./component/Balance";
import ExpenseCard from "./component/ExpenseCard";
import NewTransaction from "./component/NewTransaction";

const StyledHeading = styled(Typography)`
  margin: 10px;
  font-size: 50px;
  text-align: center;
  color: lightseagreen;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <Box>
      <StyledHeading>expense tracker</StyledHeading>
      <Box>
        <Box>
          <Balance />
          <ExpenseCard />
          <NewTransaction />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default App;
