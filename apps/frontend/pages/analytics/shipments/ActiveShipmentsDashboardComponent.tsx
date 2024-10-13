import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { ActiveShipmentsDashboardComponentProps } from './';

export function ActiveShipmentsDashboardComponent({
  headerProps,
  metricsData,
  mapProps,
  tableProps
}: ActiveShipmentsDashboardComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <ActiveShipmentsDashboardHeader headerProps={headerProps} metricsData={metricsData} />
        </div>
        <div className="col-span-12">
          <ActiveShipmentsDashboardMetricsContainer metricsData={metricsData} />
        </div>
        <div className="col-span-12">
          <RealTimeShipmentMapContainer mapProps={mapProps} />
        </div>
        <div className="col-span-12">
          <ActiveShipmentsTableContainer headerProps={headerProps} tableProps={tableProps} />
        </div>
      </div>
    </main>
  );
}

function ActiveShipmentsDashboardHeader({ headerProps, metricsData }: ActiveShipmentsDashboardComponentProps) {
  const isLoading = !metricsData;

  return (
    <header className="w-full bg-[hsl(var(--app-background-50))] p-4 rounded-lg shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[hsl(var(--app-foreground-900))] mb-4">
        {headerProps.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-3 flex justify-center items-center">
            <Spinner size="lg" color="primary" />
          </div>
        ) : (
          <>
            <MetricCard
              title="Total Active Shipments"
              value={metricsData.totalActiveShipments}
              icon="ph:package-fill"
              color="text-[hsl(var(--app-primary-500))]"
            />
            <MetricCard
              title="On-Time Deliveries"
              value={`${metricsData.onTimeDeliveries}%`}
              icon="ph:clock-fill"
              color="text-[hsl(var(--app-success-500))]"
            />
            <MetricCard
              title="Potential Issues"
              value={metricsData.potentialIssues}
              icon="ph:warning-fill"
              color="text-[hsl(var(--app-warning-500))]"
            />
          </>
        )}
      </div>
    </header>
  );
}

function MetricCard({ title, value, icon, color }: MetricCardProps) {
  return (
    <Card 
      isHoverable 
      isPressable 
      className="bg-[hsl(var(--app-background-100))] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 h-full"
    >
      <CardBody className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-[hsl(var(--app-foreground-700))]">{title}</h3>
          <Icon icon={icon} className={`text-2xl ${color}`} aria-label={`${title} icon`} />
        </div>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
      </CardBody>
    </Card>
  );
}

function RealTimeShipmentMapContainer({ mapProps }: ActiveShipmentsDashboardComponentProps) {
  return (
    <Card 
      className="w-full h-full"
      shadow="md"
      radius="lg"
    >
      <CardHeader className="flex gap-3 p-4">
        <Icon icon="ph:map-trifold" width={28} height={28} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground-900">Real-Time Shipment Map</h2>
      </CardHeader>
      <CardBody>
        <div 
          className="w-full h-[400px] bg-background-200 flex items-center justify-center rounded-lg overflow-hidden"
          aria-label="Interactive map for real-time shipment tracking"
          role="img"
        >
          <p className="text-foreground-400 text-lg">
            Interactive Shipment Tracking Map
            <br />
            <span className="text-sm">(Coming Soon: Live tracking of all active shipments)</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

function ActiveShipmentsTableContainer({ headerProps, tableProps }: ActiveShipmentsDashboardComponentProps) {
  const [sortDescriptor, setSortDescriptor] = useState<{ column: string; direction: 'ascending' | 'descending' } | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: 'id', label: 'Shipment ID', sortable: true },
    { key: 'origin', label: 'Origin', sortable: true },
    { key: 'destination', label: 'Destination', sortable: true },
    { key: 'priority', label: 'Priority', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'eta', label: 'ETA', sortable: true },
  ];

  const sortedItems = React.useMemo(() => {
    return [...tableProps.data].sort((a, b) => {
      const first = a[sortDescriptor?.column as keyof ShipmentEntity] as string;
      const second = b[sortDescriptor?.column as keyof ShipmentEntity] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      if (sortDescriptor?.direction === 'descending') {
        return -cmp;
      }
      return cmp;
    });
  }, [tableProps.data, sortDescriptor]);

  const pages = Math.ceil(sortedItems.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedItems.slice(start, end);
  }, [sortedItems, currentPage]);

  const renderCell = (shipment: ShipmentEntity, columnKey: React.Key) => {
    switch (columnKey) {
      case 'id':
        return <div className="flex items-center"><Icon icon="ph:package-fill" className="mr-2" />{shipment.Id}</div>;
      case 'origin':
        return shipment.Origin;
      case 'destination':
        return shipment.Destination;
      case 'priority':
        return shipment.Priority;
      case 'status':
        return (
          <Chip
            className={`${getStatusColor(shipment.Status)} text-white`}
            size="sm"
            variant="flat"
          >
            {shipment.Status}
          </Chip>
        );
      case 'eta':
        return shipment.ETA || 'N/A';
      default:
        return '';
    }
  };

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case 'On Track':
        return 'bg-[hsl(var(--app-success-500))]';
      case 'Delayed':
        return 'bg-[hsl(var(--app-warning-500))]';
      case 'Issue':
        return 'bg-[hsl(var(--app-danger-500))]';
      default:
        return 'bg-[hsl(var(--app-primary-500))]';
    }
  };

  const handleSortChange = (columnKey: string) => {
    if (sortDescriptor?.column === columnKey) {
      setSortDescriptor({
        column: columnKey,
        direction: sortDescriptor.direction === 'ascending' ? 'descending' : 'ascending',
      });
    } else {
      setSortDescriptor({
        column: columnKey,
        direction: 'ascending',
      });
    }
    tableProps.onSortChange([{ field: columnKey as keyof ShipmentEntity, direction: sortDescriptor?.direction === 'ascending' ? 'desc' : 'asc' }]);
  };

  return (
    <Card className="w-full bg-[hsl(var(--app-background-50))] shadow-md">
      <CardHeader className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--app-foreground-900))]">{headerProps.title}</h2>
        <Button
          auto
          size="sm"
          onPress={() => tableProps.onFilterChange('')}
          className="bg-[hsl(var(--app-primary-500))] text-white"
        >
          Clear Filters
        </Button>
      </CardHeader>
      <CardBody>
        {tableProps.isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" color="primary" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-8 text-[hsl(var(--app-foreground-500))]">
            No active shipments found.
          </div>
        ) : (
          <>
            <Table
              aria-label="Active Shipments Table"
              className="min-w-full"
              selectionMode="none"
              sortDescriptor={sortDescriptor}
              onSortChange={(column) => handleSortChange(column as string)}
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.key}
                    className="text-[hsl(var(--app-foreground-900))] font-semibold"
                    allowsSorting={column.sortable}
                  >
                    {column.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={items}>
                {(shipment) => (
                  <TableRow key={shipment.Id} className="hover:bg-[hsl(var(--app-background-100))]">
                    {(columnKey) => (
                      <TableCell>{renderCell(shipment, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex justify-end mt-4">
              <Pagination
                total={pages}
                initialPage={1}
                page={currentPage}
                onChange={setCurrentPage}
                className="text-[hsl(var(--app-foreground-900))]"
              />
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}
