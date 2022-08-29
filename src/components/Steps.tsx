import { Button, Step, StepLabel, Stepper, Box, Alert } from "@mui/material";
import { useState } from "react";
import Products from "./Products";
import Delivery from "./Delivery";
import { Stack } from "@mui/system";
import Payment from "./Payment";

function Steps() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Products</StepLabel>
        </Step>
        <Step>
          <StepLabel>Método de entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pagamento</StepLabel>
        </Step>
      </Stepper>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {currentStep === 0 && <Products />}
        {currentStep === 1 && <Delivery />}
        {currentStep === 2 && <Payment />}
        {currentStep === 3 && (
          <Stack sx={{ width: '100%', margin: '30px' }} spacing={2}>
             <Alert severity="success">
             Compra efetuada com sucesso! Confira seu e- mail
              </Alert>
          </Stack>
        )}

      </Box>

      <Box
        sx={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} direction={"row"}>
          <Button
            variant="contained"
            onClick={back}
            disabled={currentStep === 0 || currentStep === 3}
          >
            Anterior
          </Button>
          <Button 
          variant="contained" 
          onClick={next}
          disabled={currentStep === 3}
          >
            {currentStep === 2 || currentStep === 3? "Concluir" : "Próximo"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Steps;
