import { useAuthentication } from './useAuthentication';

          /**
           * Hook to get the current user.
           * 
           * @returns {UserEntity} The current user.
           * 
           * @example
           * const user = useCurrentUser();
           * 
           * @typedef {Object} UserEntity
          */
          export function useCurrentUser() {
            const { getUserData } = useAuthentication();

            return getUserData();
          }