import * as React from "react";
import Box from "@mui/material/Box";
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
import { MenuItem, Select, Typography } from "@mui/material";

function Delivery() {
  return (
    <Box
      p={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1" p={2} mx={-2}>
        Selecione um método de entrega
      </Typography>
      <Select defaultValue={10}>
        <MenuItem value={10}>Correios BRL</MenuItem>
        <MenuItem value={20}>American Transporter</MenuItem>
        <MenuItem value={30}>Global UT387</MenuItem>
      </Select>
    </Box>
  );
}

export default Delivery;

/*
    <Box p={4}>
        <FormControl sx={{width: '50%'}}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Selecione um método de entrega
        </InputLabel>
        <NativeSelect
          defaultValue={10}
        >
          <option value={10}>Correios BRL</option>
          <option value={20}>USA Transporter</option>
          <option value={30}>Pastel de flango of China</option>
        </NativeSelect>
      </FormControl>
    </Box>
  )
*/
