import {AlertContext} from '@/src/providers';
          import { useContext } from 'react';

          /**
           * Hook to handle alerts in the application.
           * 
           * @returns {{show(props: AlertProviderProps) => void}} An object containing the the `show` function.
           * 
           * @example
           * const {show} = useAlert();
           * show({title: 'Alert Title', message: 'Alert Message', severity: 'success'});
           * 
           * @param {AlertProviderProps} props - The alert properties.
           * @param {string} props.title - The title of the alert.
           * @param {string} props.message - The message of the alert.
           * @param {AlertSeverity} props.severity - The severity of the alert.
           * @param {number} props.timeout - The timeout of the alert.
           * @param {boolean} props.showIcon - When true, the alert will show an icon.
           * @param {AlertPlacement} props.placement - The placement of the alert.
          */

          export function useAlert(){
            const context = useContext(AlertContext);

            if (!context) {
              throw new Error('useAlert must be used within a AlertProvider');
            }

            return context;
          };