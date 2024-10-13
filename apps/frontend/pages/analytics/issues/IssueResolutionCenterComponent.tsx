import React from 'react';
import { Card, CardHeader, CardBody, Input, Button, Tooltip, Skeleton, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Select, SelectItem, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { StatusUpdateEntity, UserEntity, StatusUpdateSort } from '@transportus/core';

interface IssueResolutionCenterComponentProps {
  statusUpdates: StatusUpdateEntity[];
  count: number;
  isLoading: boolean;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSortOrderChange: (value: StatusUpdateSort[]) => void;
  onResolveIssue: (issueId: string) => Promise<void>;
  onUpdateIssueStatus: (issueId: string, newStatus: string) => Promise<void>;
  currentUser: UserEntity | undefined;
}

export function IssueResolutionCenterComponent({
  statusUpdates,
  count,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onSortOrderChange,
  onResolveIssue,
  onUpdateIssueStatus,
  currentUser
}: IssueResolutionCenterComponentProps) {
  const [selectedIssue, setSelectedIssue] = React.useState<StatusUpdateEntity | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = React.useState(false);
  const [isResolvingIssue, setIsResolvingIssue] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [issueType, setIssueType] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleIssueSelection = (issue: StatusUpdateEntity) => {
    setSelectedIssue(issue);
  };

  const handleStatusUpdate = async () => {
    if (!selectedIssue) return;
    setIsUpdatingStatus(true);
    setError(null);
    try {
      await onUpdateIssueStatus(selectedIssue.Id, 'In Progress');
    } catch (err) {
      setError('Failed to update status. Please try again.');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleResolveIssue = async () => {
    if (!selectedIssue) return;
    setIsResolvingIssue(true);
    setError(null);
    try {
      await onResolveIssue(selectedIssue.Id);
    } catch (err) {
      setError('Failed to resolve issue. Please try again.');
    } finally {
      setIsResolvingIssue(false);
    }
  };

  const handleNewIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement new issue submission logic here
    console.log('New issue submitted:', { issueType, priority, description });
  };

  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <Card isHoverable className="w-full bg-[hsl(var(--app-background-50))] shadow-md">
          <CardHeader className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-[hsl(var(--app-foreground-900))]">
              Issue Resolution Center
            </h1>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                startContent={<Icon icon="ph:magnifying-glass" className="text-[hsl(var(--app-foreground-500))]" />}
                className="w-64"
                aria-label="Search issues"
              />
              <Button auto color="primary" variant="solid" onPress={() => {}} aria-label="Create new issue">
                <Icon icon="ph:plus-bold" className="mr-2" />
                New Issue
              </Button>
              {currentUser && (
                <Tooltip content={`${currentUser.FirstName} ${currentUser.LastName} - ${currentUser.Email}`}>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                      src={currentUser.Avatar?.url || 'https://via.placeholder.com/32'}
                      alt={`${currentUser.FirstName || ''} ${currentUser.LastName || ''}`}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-[hsl(var(--app-foreground-700))]">
                      {currentUser.FirstName} {currentUser.LastName}
                    </span>
                  </div>
                </Tooltip>
              )}
            </div>
          </CardHeader>
          <CardBody className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <Button auto color="secondary" variant="flat" onPress={() => {}} aria-label="Filter issues">
                  <Icon icon="ph:funnel-bold" className="mr-2" />
                  Filter
                </Button>
                <Button auto color="secondary" variant="flat" onPress={() => onSortOrderChange([{ createdAt: 'desc' }])} aria-label="Sort issues">
                  <Icon icon="ph:sort-ascending-bold" className="mr-2" />
                  Sort
                </Button>
              </div>
              <div className="text-[hsl(var(--app-foreground-600))]">
                Showing 1-{Math.min(10, count)} of {count} issues
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-5 lg:col-span-4">
        <Card className="h-full" shadow="sm">
          <CardHeader className="bg-[hsl(var(--app-background-100))] p-4">
            <h2 className="text-lg font-semibold">Open Issues</h2>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <Spinner label="Loading issues..." />
              </div>
            ) : statusUpdates.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <p>No open issues found.</p>
              </div>
            ) : (
              <Table aria-label="Open issues table">
                <TableHeader>
                  <TableColumn>Issue</TableColumn>
                  <TableColumn>Status</TableColumn>
                  <TableColumn>Last Updated</TableColumn>
                </TableHeader>
                <TableBody>
                  {statusUpdates.map((update) => (
                    <TableRow 
                      key={update.Id} 
                      className="cursor-pointer hover:bg-[hsl(var(--app-background-200))]" 
                      onClick={() => handleIssueSelection(update)}
                    >
                      <TableCell>{update.Id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Icon icon="ph:circle-fill" className="text-[hsl(var(--app-warning-500))]" />
                          {update.Status}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(update.UpdatedAt).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12 md:col-span-7 lg:col-span-8">
        <Card className="h-full" shadow="sm">
          <CardHeader className="bg-[hsl(var(--app-background-100))] p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Issue Details</h2>
            {selectedIssue && (
              <span className="text-sm text-[hsl(var(--app-foreground-500))]">Issue #{selectedIssue.Id}</span>
            )}
          </CardHeader>
          <CardBody className="p-4 flex flex-col gap-4">
            {selectedIssue ? (
              <>
                <div>
                  <h3 className="text-md font-semibold">Description</h3>
                  <p>{selectedIssue.Status}</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold">Communication Thread</h3>
                  <div className="bg-[hsl(var(--app-background-100))] rounded-md p-4 max-h-[300px] overflow-y-auto">
                    <p>No messages in the communication thread.</p>
                  </div>
                </div>
                {error && (
                  <div className="text-[hsl(var(--app-danger-500))] text-sm">{error}</div>
                )}
                <div className="flex justify-end gap-2">
                  <Button 
                    color="primary" 
                    onClick={handleStatusUpdate} 
                    isLoading={isUpdatingStatus}
                    startContent={<Icon icon="ph:arrow-circle-right" />}
                    aria-label="Update Status"
                  >
                    Update Status
                  </Button>
                  <Button 
                    color="success" 
                    onClick={handleResolveIssue} 
                    isLoading={isResolvingIssue}
                    startContent={<Icon icon="ph:check-circle" />}
                    aria-label="Resolve Issue"
                  >
                    Resolve Issue
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>Select an issue to view details</p>
              </div>
            )}
          </CardBody>
        </Card>
      </section>

      <section className="col-span-12">
        <Card className="bg-[hsl(var(--app-background-50))] rounded-lg shadow-[var(--app-box-shadow-medium)] p-6">
          <CardHeader className="p-4 border-b border-[hsl(var(--app-foreground-100))]">
            <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--app-foreground-900))] flex items-center">
              <Icon icon="ph:user-gear-bold" className="mr-2" />
              Log New Issue
            </h2>
          </CardHeader>
          <CardBody className="p-4 flex flex-col gap-4">
            <form onSubmit={handleNewIssueSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <Select
                    label="Issue Type"
                    placeholder="Select issue type"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                  >
                    <SelectItem value="bug">Bug</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="improvement">Improvement</SelectItem>
                    <SelectItem value="task">Task</SelectItem>
                  </Select>
                </div>
                <div className="w-full sm:w-1/2">
                  <Select
                    label="Priority"
                    placeholder="Select priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </Select>
                </div>
              </div>
              <Textarea
                label="Description"
                placeholder="Describe the issue..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={500}
              />
              <Button
                type="submit"
                className="bg-[hsl(var(--app-primary-500))] text-white px-6 py-2 rounded-md font-semibold
                  hover:bg-[hsl(var(--app-primary-600))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--app-primary-400))]
                  active:bg-[hsl(var(--app-primary-700))] disabled:bg-[hsl(var(--app-foreground-200))] disabled:text-[hsl(var(--app-foreground-400))]"
                startContent={<Icon icon="ph:user-plus-bold" />}
              >
                Submit Issue
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
