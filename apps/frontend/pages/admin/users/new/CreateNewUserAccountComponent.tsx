import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { CreateNewUserAccountComponentProps } from './';

export function CreateNewUserAccountComponent({
  formikProps,
  handleCancel,
  isLoading,
  ...restProps
}: CreateNewUserAccountComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 md:p-6 lg:p-8">
      <Card className="col-span-12">
        <CardBody className="p-0">
          <CreateNewUserAccountHeader
            isLoading={isLoading}
            subtitle="Fill in the details to create a new user account"
          />
          <div className="grid grid-cols-12 gap-4 p-4 md:p-6 lg:p-8">
            <div className="col-span-12">
              <CreateNewUserAccountForm
                formikProps={formikProps}
                handleCancel={handleCancel}
                isLoading={isLoading}
                submitError={formikProps.errors.submit}
              />
            </div>
          </div>
          <CreateNewUserAccountFooter
            formikProps={formikProps}
            handleCancel={handleCancel}
            isLoading={isLoading}
          />
        </CardBody>
      </Card>
    </main>
  );
}

function CreateNewUserAccountHeader({ isLoading, subtitle }) {
  return (
    <CardHeader className="flex gap-3 p-5 md:p-6 lg:p-8">
      {isLoading ? (
        <Spinner size="md" color="primary" />
      ) : (
        <Icon
          icon="ph:user-plus-bold"
          className="text-[hsl(var(--app-primary-500))] text-3xl md:text-4xl lg:text-5xl"
        />
      )}
      <div className="flex flex-col">
        <h2 className="text-[hsl(var(--app-foreground-900))] text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
          Create New User Account
        </h2>
        <p className="text-[hsl(var(--app-foreground-500))] text-sm md:text-base">
          {subtitle}
        </p>
      </div>
    </CardHeader>
  );
}

function CreateNewUserAccountForm({
  formikProps,
  handleCancel,
  isLoading,
  submitError
}) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formikProps;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Username"
        placeholder="Enter username"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.username && !!errors.username}
        errorMessage={touched.username && errors.username}
        isRequired
      />
      <Input
        label="Email"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.email && !!errors.email}
        errorMessage={touched.email && errors.email}
        isRequired
      />
      <Input
        label="Temporary Password"
        placeholder="Enter temporary password"
        name="temporaryPassword"
        type="password"
        value={values.temporaryPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.temporaryPassword && !!errors.temporaryPassword}
        errorMessage={touched.temporaryPassword && errors.temporaryPassword}
        isRequired
      />
      <Select
        label="Role"
        placeholder="Select a role"
        name="role"
        value={values.role}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched.role && !!errors.role}
        errorMessage={touched.role && errors.role}
        isRequired
      >
        <SelectItem key="admin" value="admin">Admin</SelectItem>
        <SelectItem key="user" value="user">User</SelectItem>
        <SelectItem key="guest" value="guest">Guest</SelectItem>
      </Select>
      <fieldset>
        <legend className="text-lg font-medium text-[hsl(var(--app-foreground-700))] mb-2">Permissions</legend>
        <CheckboxGroup
          name="permissions"
          value={values.permissions}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <Checkbox value="viewClients">View Clients</Checkbox>
          <Checkbox value="editClients">Edit Clients</Checkbox>
          <Checkbox value="viewPackages">View Packages</Checkbox>
          <Checkbox value="editPackages">Edit Packages</Checkbox>
          <Checkbox value="viewAnalytics">View Analytics</Checkbox>
        </CheckboxGroup>
      </fieldset>
      {submitError && (
        <div className="text-red-500 mt-4">{submitError}</div>
      )}
    </form>
  );
}

function CreateNewUserAccountFooter({
  formikProps,
  handleCancel,
  isLoading
}) {
  return (
    <CardFooter className="flex flex-col sm:flex-row justify-end items-center gap-2 p-4 bg-[hsl(var(--app-background-50))]">
      <Button
        variant="bordered"
        color="default"
        size="lg"
        radius="md"
        onClick={handleCancel}
        disabled={isLoading}
        startContent={<Icon icon="ph:arrow-left" />}
        className="w-full sm:w-auto text-[hsl(var(--app-foreground-600))] hover:bg-[hsl(var(--app-background-100))] focus:ring-2 focus:ring-[hsl(var(--app-primary-200))] transition-all"
        disableRipple
      >
        Cancel
      </Button>
      <Button
        variant="solid"
        color="success"
        size="lg"
        radius="md"
        onClick={formikProps.handleSubmit}
        isLoading={isLoading}
        disabled={!formikProps.isValid || isLoading}
        startContent={!isLoading && <Icon icon="ph:arrow-right" />}
        className="w-full sm:w-auto bg-[hsl(var(--app-success-500))] text-[hsl(var(--app-foreground-50))] hover:bg-[hsl(var(--app-success-600))] focus:ring-2 focus:ring-[hsl(var(--app-success-200))] transition-all"
        disableRipple
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </Button>
      {!formikProps.isValid && (
        <p className="text-[hsl(var(--app-danger-500))] text-sm mt-2 sm:mt-0 sm:ml-2">
          Please fill in all required fields correctly.
        </p>
      )}
    </CardFooter>
  );
}