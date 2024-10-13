import React from 'react';
import { Card } from '@nextui-org/react';
import { ImprovementActionPlannerComponentProps } from './';
import { ImprovementActionPlannerHeader } from './ImprovementActionPlannerHeader';
import { ProjectManagementBoardSection } from './ProjectManagementBoardSection';
import { TaskAssignmentSection } from './TaskAssignmentSection';
import { BestPracticesSection } from './BestPracticesSection';

export function ImprovementActionPlannerComponent({
  notifications,
  notificationsCount,
  isLoading,
  searchTerm,
  onSearchTermChange,
  onSortChange,
  currentUser,
  onAddBestPractice,
  onAssignTask,
  onUpdateProjectStatus
}: ImprovementActionPlannerComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md mb-8">
        <ImprovementActionPlannerHeader
          notifications={notifications}
          notificationsCount={notificationsCount}
          isLoading={isLoading}
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSortChange={onSortChange}
          currentUser={currentUser}
        />
      </Card>

      <div className="grid grid-cols-12 gap-8">
        <section className="col-span-12 lg:col-span-8">
          <ProjectManagementBoardSection
            notifications={notifications}
            notificationsCount={notificationsCount}
            isLoading={isLoading}
            isError={false}
            searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange}
            onSortChange={onSortChange}
            currentUser={currentUser}
            onAddBestPractice={onAddBestPractice}
            onAssignTask={onAssignTask}
            onUpdateProjectStatus={onUpdateProjectStatus}
          />
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-8">
          <TaskAssignmentSection
            onAssignTask={onAssignTask}
            currentUser={currentUser}
            isLoading={isLoading}
            teamMembers={[]} // TODO: Replace with actual team members data
          />

          <BestPracticesSection
            bestPractices={[
              'Always confirm delivery address with the client before dispatch',
              'Implement a system for real-time package tracking updates',
              'Regularly review and optimize delivery routes for efficiency'
            ]}
            onAddBestPractice={onAddBestPractice}
            isLoading={isLoading}
          />
        </aside>
      </div>
    </main>
  );
}
