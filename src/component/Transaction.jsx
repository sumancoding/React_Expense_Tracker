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
import DeleteIcon from "@mui/icons-material/Delete";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Transaction = ({ transactions, setTransactions }) => {
  const color = transactions.amount > 0 ? "Green" : "Red";

  const deleteId = (id) => {
    setTransactions(
      transactions.filter((transactions) => transactions.id !== id)
    );
  };
  return (
    <Box>
      <Typography variant="h4">Transactions History</Typography>
      <Divider />
      <List>
        {transactions.map((transactions, i) => (
          <Detail style={{ background: `${color}`, color: "white" }} key={i}>
            <ListItemText>{transactions.text}</ListItemText>
            <ListItemText>{transactions.amount}</ListItemText>{" "}
            <DeleteIcon onclick={() => deleteId(transactions.id)} />
          </Detail>
        ))}
      </List>
    </Box>
  );
};

export default Transaction;
