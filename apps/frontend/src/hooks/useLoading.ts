
          import {LoadingContext} from '@/src/providers';
          import { useContext } from 'react';

          /**
           * Hook to handle loading state in the application.
           * 
           * @returns {{showLoading: () => void, hideLoading: () => void}} An object containing the the `showLoading` function.
           * 
           * @example
           * const {showLoading, hideLoading} = useLoading();
          */

          export function useLoading(){
            const context = useContext(LoadingContext);

            if (!context) {
              throw new Error('useLoading must be used within a LoadingProvider');
            }

            return context;
          };
        