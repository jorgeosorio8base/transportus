import React from 'react';
import { AuditLogComponentProps } from './';
import { AuditLogHeader } from './AuditLogHeader';
import { AuditLogFilters } from './AuditLogFilters';
import { AuditLogTable } from './AuditLogTable';
import { AuditLogPagination } from './AuditLogPagination';

export function AuditLogComponent({
  auditLogs,
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
  onSearch,
  onSort,
  formatDate,
  getEventType
}: AuditLogComponentProps) {
  return (
    <main className="grid grid-cols-12 gap-4 p-4 bg-[hsl(var(--app-background-50))]">
      <section className="col-span-12">
        <AuditLogHeader
          isLoading={isLoading}
          onSearch={onSearch}
          onSort={onSort}
        />
      </section>
      <section className="col-span-12 lg:col-span-3">
        <AuditLogFilters
          onSearch={onSearch}
          onSort={onSort}
          isLoading={isLoading}
        />
      </section>
      <section className="col-span-12 lg:col-span-9">
        <div className="bg-white rounded-lg shadow-sm h-full">
          <AuditLogTable
            auditLogs={auditLogs}
            isLoading={isLoading}
            isError={false}
            errorMessage=""
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onSearch={onSearch}
            onSort={onSort}
            formatDate={formatDate}
            getEventType={getEventType}
          />
          <AuditLogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
            isLoading={isLoading}
          />
        </div>
      </section>
    </main>
  );
}
