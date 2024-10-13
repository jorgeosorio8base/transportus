import React from 'react';
import { Card, CardHeader, CardBody, Avatar, Button, Spinner, Select, SelectItem, Checkbox, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { UserProfileComponentProps, UserProfileFormikValues } from './';

export function UserProfileComponent({
  userProfile,
  isEditMode,
  handleEditProfile,
  handleCancelEdit,
  handleSubmit,
  initialValues
}: UserProfileComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-small)] rounded-lg">
            <CardHeader className="flex flex-col items-start p-6">
              <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))] mb-4">User Profile</h1>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                  <Avatar
                    src={userProfile?.Avatar?.url}
                    name={`${userProfile?.FirstName || ''} ${userProfile?.LastName || ''}`}
                    size="lg"
                    className="text-lg bg-[hsl(var(--app-primary-100))] text-[hsl(var(--app-primary-700))]"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">{`${userProfile?.FirstName || ''} ${userProfile?.LastName || ''}`}</h2>
                    <p className="text-sm text-[hsl(var(--app-foreground-500))]">{userProfile?.Email}</p>
                  </div>
                </div>
                <Button
                  auto
                  color={isEditMode ? 'warning' : 'primary'}
                  onClick={isEditMode ? handleCancelEdit : handleEditProfile}
                  className="min-w-[100px]"
                  disableRipple
                >
                  {isEditMode ? (
                    <>
                      <Icon icon="ph:x" className="mr-1" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <Icon icon="ph:pencil" className="mr-1" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="w-full h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-700))]">Personal Information</h3>
                  <div className="flex items-center gap-2">
                    <Icon icon="ph:envelope" className="text-[hsl(var(--app-foreground-400))]" />
                    <p className="text-[hsl(var(--app-foreground-600))]">{userProfile?.Email || 'N/A'}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="ph:clock" className="text-[hsl(var(--app-foreground-400))]" />
                    <p className="text-[hsl(var(--app-foreground-600))]">{userProfile?.Timezone || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-700))]">Account Details</h3>
                  <div className="flex items-center gap-2">
                    <Icon icon="ph:identification-card" className="text-[hsl(var(--app-foreground-400))]" />
                    <p className="text-[hsl(var(--app-foreground-600))]">{`User ID: ${userProfile?.Id ? userProfile.Id.slice(0, 8) : 'N/A'}`}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="ph:calendar" className="text-[hsl(var(--app-foreground-400))]" />
                    <p className="text-[hsl(var(--app-foreground-600))]">
                      {`Account Created: ${userProfile?.CreatedAt ? new Date(userProfile.CreatedAt).toLocaleString() : 'N/A'}`}
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12 md:col-span-6">
          <Card className="w-full h-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6 flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-[hsl(var(--app-foreground-900))] mb-3">Preferences</h3>
              <div className="flex flex-col gap-4 sm:gap-6">
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">
                    Preferred Language
                  </label>
                  <Select
                    id="language"
                    placeholder="Select language"
                    className="w-full"
                    value={initialValues.preferredLanguage}
                    onChange={(e) => handleSubmit({ ...initialValues, preferredLanguage: e.target.value })}
                    isDisabled={!isEditMode}
                  >
                    {['English', 'Spanish', 'French', 'German', 'Chinese'].map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-[hsl(var(--app-foreground-700))] mb-2">
                    Time Zone
                  </label>
                  <Select
                    id="timezone"
                    placeholder="Select timezone"
                    className="w-full"
                    value={initialValues.Timezone}
                    onChange={(e) => handleSubmit({ ...initialValues, Timezone: e.target.value })}
                    isDisabled={!isEditMode}
                  >
                    {['UTC-12:00', 'UTC-08:00', 'UTC-04:00', 'UTC+00:00', 'UTC+04:00', 'UTC+08:00', 'UTC+12:00'].map((tz) => (
                      <SelectItem key={tz} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Checkbox
                  isSelected={initialValues.receiveNotifications}
                  isDisabled={!isEditMode}
                  color="primary"
                  onChange={(e) => handleSubmit({ ...initialValues, receiveNotifications: e.target.checked })}
                >
                  Receive email notifications
                </Checkbox>
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="col-span-12">
          <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-[var(--app-box-shadow-medium)] rounded-lg">
            <CardBody className="p-6">
              <div className="flex items-center mb-4">
                <Icon icon="ph:user-list" className="text-2xl mr-2" />
                <h3 className="text-xl font-semibold">Account Activity</h3>
              </div>
              <Table aria-label="Account activity table" className="mb-4">
                <TableHeader>
                  <TableColumn>Date</TableColumn>
                  <TableColumn>Action</TableColumn>
                  <TableColumn>IP Address</TableColumn>
                </TableHeader>
                <TableBody>
                  {userProfile?.accountActivities?.map((activity, index) => (
                    <TableRow key={index} className="hover:bg-default-100 transition-colors">
                      <TableCell className="p-4 text-left" aria-label="Date">{activity.date}</TableCell>
                      <TableCell className="p-4 text-left" aria-label="Action">{activity.action}</TableCell>
                      <TableCell className="p-4 text-left" aria-label="IP Address">{activity.ipAddress}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center">
                <Button color="primary" variant="light">
                  View All Activities
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
