import React from 'react';
import { Card, CardBody, CardFooter, Input, Checkbox, CheckboxGroup, Button, Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { UserAccountDetailsComponentProps, UserAccountDetailsFormikProps } from '@transportus/core';

export function UserAccountDetailsComponent({
  user,
  isLoading,
  onSaveChanges,
  onResetPassword,
  onGoBack
}: UserAccountDetailsComponentProps) {
  const [formValues, setFormValues] = React.useState<UserAccountDetailsFormikProps>({
    fullName: `${user?.FirstName || ''} ${user?.LastName || ''}`.trim(),
    email: user?.Email || '',
    phoneNumber: user?.PhoneNumber || '',
    role: user?.Role || 'User',
    permissions: user?.Permissions || [],
    isActive: user?.Status === 'Active'
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({}); 

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.fullName) newErrors.fullName = 'Full name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (formValues.email && !/^\S+@\S+\.\S+$/.test(formValues.email)) newErrors.email = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      onSaveChanges(formValues);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner label="Loading user details..." color="primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-[hsl(var(--app-foreground-500))]">
        No user data available.
      </div>
    );
  }

  return (
    <main className="grid grid-cols-12 gap-4 p-4">
      <section className="col-span-12">
        <Card className="w-full">
          <CardBody className="p-4">
            <header className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={onGoBack}
                  className="p-1 rounded-full hover:bg-[hsl(var(--app-background-100))] transition-colors"
                  aria-label="Go back"
                >
                  <Icon icon="ph:arrow-left" className="text-xl text-[hsl(var(--app-foreground-600))]" />
                </button>
                <Icon icon="ph:user-circle" className="text-2xl text-[hsl(var(--app-foreground-600))]" />
                <h1 className="text-xl font-bold text-[hsl(var(--app-foreground-900))]">
                  User Account Details
                </h1>
              </div>
              {isLoading && (
                <Spinner size="sm" color="primary" />
              )}
            </header>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  placeholder="Enter full name"
                  value={formValues.fullName}
                  onChange={(e) => setFormValues({...formValues, fullName: e.target.value})}
                  errorMessage={errors.fullName}
                  isInvalid={!!errors.fullName}
                />
                <Input
                  label="Email Address"
                  placeholder="Enter email address"
                  value={formValues.email}
                  onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                  errorMessage={errors.email}
                  isInvalid={!!errors.email}
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter phone number"
                  value={formValues.phoneNumber}
                  onChange={(e) => setFormValues({...formValues, phoneNumber: e.target.value})}
                />
                <Input
                  label="Role"
                  placeholder="User role"
                  value={formValues.role}
                  isReadOnly
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[hsl(var(--app-foreground-900))] mb-2">
                  Permissions
                </h2>
                <CheckboxGroup
                  value={formValues.permissions}
                  onChange={(values) => setFormValues({...formValues, permissions: values as string[]})}
                  className="grid grid-cols-2 md:grid-cols-3 gap-2"
                >
                  <Checkbox value="view-clients">View Clients</Checkbox>
                  <Checkbox value="edit-clients">Edit Clients</Checkbox>
                  <Checkbox value="view-packages">View Packages</Checkbox>
                  <Checkbox value="edit-packages">Edit Packages</Checkbox>
                  <Checkbox value="manage-users">Manage Users</Checkbox>
                  <Checkbox value="view-analytics">View Analytics</Checkbox>
                </CheckboxGroup>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  color="primary"
                  variant="flat"
                  onPress={onResetPassword}
                >
                  Reset Password
                </Button>
                <Checkbox
                  isSelected={formValues.isActive}
                  onChange={(isSelected) => setFormValues({...formValues, isActive: isSelected})}
                >
                  Account Active
                </Checkbox>
              </div>
              <div>
                <h3 className="text-md font-semibold text-[hsl(var(--app-foreground-900))] mb-2">
                  Recent Account Activity
                </h3>
                <ul className="list-disc list-inside text-sm text-[hsl(var(--app-foreground-700))]">
                  <li>2023-06-15 14:30 - Logged in from 192.168.1.100</li>
                  <li>2023-06-14 09:45 - Updated profile information</li>
                  <li>2023-06-13 16:20 - Changed password</li>
                </ul>
              </div>
            </form>
          </CardBody>
          <CardFooter className="justify-between px-6 py-4">
            <Button variant="flat" onPress={onGoBack}>
              Back to List
            </Button>
            <Button color="primary" onPress={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
