import {
  Input,
  Select,
  TextField,
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  styled,
  Paper,
  Typography,
  Divider,
  Button,
  Stack,
  Box,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const WriteContent = () => {
  const { control, register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6">✍️ 담당자안내</Typography>

        <DetailTable>
          <Grid item sm={6} md={6}>
            <label>담당자 안내</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <StyledInput
                  // size="small"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={6} md={6}>
            <div>
              <label>매물타입선택</label>
            </div>
            <Controller
              name="propertyType"
              control={control}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    size="small"
                    sx={{ minWidth: "150px" }}
                    defaultValue="공장매매"
                  >
                    <MenuItem value="공장매매">공장매매</MenuItem>
                    <MenuItem value="공장임대">공장임대</MenuItem>
                    <MenuItem value="토지매매">토지매매</MenuItem>
                  </Select>
                </>
              )}
            />
          </Grid>
        </DetailTable>
        <input type="submit" />
      </form>
    </div>
  );
};

export default WriteContent;

const DetailTable = (props) => {
  return (
    <Box px={4} py={2} my={1} component={StyledPaper}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
        {props.children}
      </Grid>
    </Box>
  );
};
export const StyledPaper = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: "5px",
  backgroundColor: "rgba(0,0,0,.03)",
  padding: 0,
}));

// const ReactHookFormSelect = ({
//   name,
//   label,
//   control,
//   defaultValue,
//   ...props
// }) => {
//   return (
//     <FormControl {...props}>
//       <Controller
//         as={
//           <Select labelId={labelId} label={label}>
//             {children}
//           </Select>
//         }
//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//       />
//     </FormControl>
//   );
// };

const StyledInput = styled(TextField)(({ theme }) => ({
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  borderRadius: "4px",
  border: "1px solid white",
  padding: "10px 15px 10px 0",
  marginBottom: "10px",
  fontSize: "14px",
}));
