
    import cn from 'classnames';
    import { createContext, ReactNode, useContext, useState } from 'react';
    import styles from './LoadingProvider.module.scss';


    type LoadingContextType = {
    showLoading(): void;
    hideLoading(): void;
    };

    export const LoadingContext = createContext({} as LoadingContextType);

    export function LoadingProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean | null>(null);

    function show() {
        setLoading(true);
    }

    function hide() {
        setLoading(false);
    }

    return (
        <LoadingContext.Provider
        value={{
            hideLoading: hide,
            showLoading: show,
        }}
        >
        {children}
        {loading && (
            <div className={styles['loadingWrapper']}>
                <div className={cn(styles['loader'])} />
            </div>
        )}
        </LoadingContext.Provider>
    );
    }
  