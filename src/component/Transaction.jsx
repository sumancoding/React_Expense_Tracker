import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Transaction = ({ transactions }) => {
  const color = transactions.amount > 0 ? "Green" : "Red";
  return (
    <Box>
      <Typography variant="h4">Transactions History</Typography>
      <Divider />
      <List>
        {transactions.map((transactions, i) => (
          <Detail style={{ background: `${color}`, color: "white" }} key={i}>
            <ListItemText>{transactions.text}</ListItemText>
            <ListItemText>{transactions.amount}</ListItemText>
          </Detail>
        ))}
      </List>
    </Box>
  );
};

export default Transaction;
