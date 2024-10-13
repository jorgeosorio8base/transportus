
      import React, { useState } from 'react';
      import { Sidebar, SidebarProps } from './Sidebar/Sidebar';
      import { useCurrentUser } from '../hooks';

      export function AppLayout({ children }: { children: React.ReactNode }) {
        
        const currentUser = useCurrentUser();
        const sidebarGroups: SidebarProps['items'] = [{"title":"Dashboard","href":"/dashboard","icon":"chart-line"},{"title":"Client Management","href":"/clients","icon":"user-list","subitems":[{"title":"Client Search","href":"/clients/search","icon":"user-focus"},{"title":"Client Profile","href":"/clients/profile","icon":"user-circle"}]},{"title":"Shipment Management","href":"/shipments","icon":"truck","subitems":[{"title":"Tracking Dashboard","href":"/shipments/tracking","icon":"truck-trailer"},{"title":"Package Status","href":"/shipments/status","icon":"package"},{"title":"Communication","href":"/shipments/communication","icon":"chat-circle"},{"title":"Instructions","href":"/shipments/instructions","icon":"clipboard-text"}]},{"title":"Analytics","href":"/analytics","icon":"chart-pie","subitems":[{"title":"Performance","href":"/analytics/performance","icon":"chart-line-up"},{"title":"Reports","href":"/analytics/reports","icon":"file-text"},{"title":"Insights","href":"/analytics/insights","icon":"lightbulb"},{"title":"Active Shipments","href":"/analytics/shipments","icon":"truck"},{"title":"Issue Resolution","href":"/analytics/issues","icon":"warning"},{"title":"Route Optimization","href":"/analytics/routes","icon":"map-pin"},{"title":"Customer Satisfaction","href":"/analytics/customers","icon":"smiley"},{"title":"Delivery History","href":"/analytics/history","icon":"clock-clockwise"}]},{"title":"Driver Schedule","href":"/drivers/schedule","icon":"calendar","subitems":[{"title":"Optimization","href":"/drivers/schedule/optimize","icon":"chart-bar"}]},{"title":"Notifications","href":"/notifications","icon":"bell"},{"title":"User Management","href":"/admin/users","icon":"users-three","subitems":[{"title":"Account Management","href":"/admin/users/manage","icon":"user-gear"},{"title":"Create User","href":"/admin/users/new","icon":"user-plus"}]},{"title":"Audit Log","href":"/admin/audit-log","icon":"list-checks"},{"title":"Settings","href":"/admin/settings","icon":"gear"},{"title":"Help Center","href":"/help","icon":"question"}];
        
        
        return (
          <div className="flex h-screen">
              <Sidebar
              
                items={sidebarGroups}
                iconStyle={"ph"}
                currentUser={currentUser || undefined}
                
              />
              <div className={`ml-[18rem] w-[calc(100%-18rem)] flex-1 p-4`}>
                  {children}
              </div>
          </div>
        )
      }