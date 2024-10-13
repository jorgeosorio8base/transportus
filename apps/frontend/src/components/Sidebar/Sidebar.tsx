
        import { Icon } from '@iconify/react';
        import { Tooltip } from '@nextui-org/react';
        import { SidebarHeader, SidebarHeaderProps } from './SidebarHeader';
        import { SidebarItems, SidebarItemsProps } from './SidebarItems';

        export interface SidebarProps extends SidebarItemsProps , SidebarHeaderProps {}

        export function Sidebar({
          iconStyle,
          items,
          
          currentUser,
          
        }: SidebarProps) {
            return (
              <div
                className={`!border-r-small border-divider transition-width fixed z-[9999] flex h-full flex-col gap-8 bg-white py-8 w-72 px-4 `}
              >
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  
                      <SidebarHeader
                        currentUser={currentUser || undefined}
                        
                         
                      />
                    
                  
                </div>
                <SidebarItems
                  iconStyle={iconStyle}
                  items={items}
                  
                />
              </div>
            );
        }
    