import { ListItemText, styled } from "@mui/material";

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
}));
