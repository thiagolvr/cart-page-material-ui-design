import { Card, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";

function Payment() {
  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          sx={{ width: "50vw" }}
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="number"
            label="Número do cartão"
            variant="standard"
          />

          <TextField type="text" label="Nome" variant="standard" />

          <TextField type="text" label="Validade" variant="standard" />

          <TextField type="number" label="CVV" variant="standard" />
        </Stack>
      </Container>
    </Card>
  );
}

export default Payment;
