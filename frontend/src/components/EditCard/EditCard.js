import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Button } from '@mui/material';
import * as yup from 'yup';
import CustomTextField from 'components/CustomTextField';

const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required"),
  lastname: yup
    .string()
    .required("Last name is required"),
  address: yup
    .string()
    .required("Address is required"),
  phonenumber: yup
    .string()
    .required("Phone number is required"),
});

const initialValues = {
  title: "",
};

export default function EditCard() {
  const {
    handleSubmit,
    control,
    // reset: resetForm,
    // clearErrors,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Card
      sx={{
        p: {
          xs: "1.25rem",
          md: "1.5rem",
        },
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="firstname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomTextField
              fullWidth
              label="First Name"
              size="small"
              error={Boolean(error?.message)}
              helperText={error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomTextField
              fullWidth
              label="Last Name"
              size="small"
              error={Boolean(error?.message)}
              helperText={error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomTextField
              fullWidth
              label="Address"
              size="small"
              error={Boolean(error?.message)}
              helperText={error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
        <Controller
          name="phonenumber"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomTextField
              fullWidth
              label="Phone Number"
              size="small"
              error={Boolean(error?.message)}
              helperText={error?.message}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
        <Button type="submit" color="primary" variant="contained">New</Button>
      </form>
    </Card>
  )
}
