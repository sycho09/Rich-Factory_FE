import {
  FormControl,
  InputBase,
  Select,
  MenuItem,
  styled,
  Box,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { SelectBoxProps } from "./types";

export const SelectBox = (props: SelectBoxProps) => {
  const { children, label, search, type, setSearch } = props;

  const handleSelect = (e: SelectChangeEvent<string | number>) => {
    setSearch({ ...search, [type]: (e.target as HTMLInputElement).value });
  };
  return (
    <>
      <FormControl size="small" sx={{ minWidth: { md: 180, sm: 100 } }}>
        <Select
          input={<StyledInput />}
          value={search[type]}
          onChange={(e: SelectChangeEvent<string | number>) => handleSelect(e)}
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
    border: "1px solid #eaeaea",
    backgroundColor: "#eaeaea",
    borderRadius: 6,
    fontSize: "16px",
    color: theme.palette.primary.dark,
    fontWeight: 600,
    outline: "none",
    height: "2rem",
    lineHeight: "2rem",
    textAlign: "center",
    padding: "2px 10px 2px 15px",
    // width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "1px 5px 1px 10px",
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "3px 15px",
  fontSize: "0.9rem",
}));

export const DefaultInput = styled(InputBase)({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  paddingRight: "20px",
  borderBottom: "1px solid #cfcfcf",
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    width: "100%",
    paddingLeft: "10px",
    fontWeight: 500,
    WebkitTextFillColor: "#000",
  },
});

export const DefaultLabel = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.grey.second,
  wordBreak: "keep-all",
  padding: "5px 0",
  [theme.breakpoints.down("sm")]: {
    minWidth: "50px",
  },
}));

export const DefaultTextField = styled(TextField)({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  padding: "0",
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    width: "100%",
    lineHeight: 2,
    paddingLeft: "10px",
    fontWeight: 500,
    WebkitTextFillColor: "#000",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
});
