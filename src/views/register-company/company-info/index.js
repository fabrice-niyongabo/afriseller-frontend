import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { toastMessage } from "src/helpers";
function CompanyInfo({ changeHandler, state, setActiveStep }) {
  const handleNext = () => {
    if (state.cmpFullName.trim() === "") {
      toastMessage("error", "Company full name is required");
      return false;
    }
    if (state.cmpShortName.trim() === "") {
      toastMessage("error", "Company short name is required");
      return false;
    }
    if (state.cmpTinNumber.trim() === "") {
      toastMessage("error", "Company TIN number is required");
      return false;
    }
    if (state.cmpPhone.trim() === "") {
      toastMessage("error", "Company Phone number is required");
      return false;
    }
    if (state.cmpEmail.trim() === "") {
      toastMessage("error", "Company Email is required");
      return false;
    }
    if (state.cmpType.trim() === "") {
      toastMessage("error", "Company type is required");
      return false;
    }
    if (state.cmpBiograph.trim() === "") {
      toastMessage("error", "Company biograph is required");
      return false;
    }
    setActiveStep(2);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Company full name"
            name="cmpFullName"
            placeholder="Enter Company full name"
            value={state.cmpFullName}
            onChange={changeHandler}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Company short name"
            name="cmpShortName"
            placeholder="Enter Company short name"
            value={state.cmpShortName}
            onChange={changeHandler}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            variant="standard"
            margin="normal"
            fullWidth
            label="TIN"
            name="cmpTinNumber"
            placeholder="TIN number"
            value={state.cmpTinNumber}
            onChange={changeHandler}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            variant="standard"
            margin="normal"
            fullWidth
            label="Phone Number"
            name="cmpPhone"
            placeholder="Enter Company phone number"
            value={state.cmpPhone}
            onChange={changeHandler}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="email"
            variant="standard"
            margin="normal"
            fullWidth
            label="Email address"
            name="cmpEmail"
            placeholder="Enter company email address"
            value={state.cmpEmail}
            onChange={changeHandler}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Company Type"
            name="cmpType"
            value={state.cmpType}
            onChange={changeHandler}
            required
          >
            <option value=""> </option>
            <option value="NGO">NGO</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            type="email"
            variant="standard"
            margin="normal"
            fullWidth
            label="Biograph"
            name="cmpBiograph"
            placeholder="Enter company biograph"
            value={state.cmpBiograph}
            onChange={changeHandler}
            multiline
            required
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button onClick={() => setActiveStep(0)} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          //   disabled={isError()}
          color="primary"
          //   onClick={!isError() ? handleNext : () => null}
          onClick={() => handleNext()}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}

export default CompanyInfo;
