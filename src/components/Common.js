import {
  FormControl,
  InputBase,
  Select,
  MenuItem,
  styled,
} from "@mui/material";
import React from "react";

export const SelectBox = (props) => {
  const { children, label, search, type, setSearch } = props;

  const handleSelect = (e) => {
    setSearch({ ...search, [type]: e.target.value });
  };
  return (
    <>
      <FormControl size="small" fullWidth sx={{ minWidth: 100 }}>
        <Select
          input={<StyledInput />}
          value={search[type]}
          onChange={(e) => handleSelect(e)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <StyledMenuItem value="">{label}</StyledMenuItem>
          {children}
        </Select>
      </FormControl>
    </>
  );
};

// styled elements
const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    border: "1px solid #7d7d7d",
    borderRadius: 3,
    fontSize: "14px",
    fontWeight: 600,
    outline: "none",
    height: "2rem",
    lineHeight: "2rem",
    textAlign: "center",
    padding: "2px 10px 2px 15px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "1px 5px 1px 10px",
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "3px 15px",
  fontSize: "0.9rem",
}));
