
        import { Icon } from '@iconify/react';
import { Card, CardBody } from '@nextui-org/react';
import cn from 'classnames';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './AlertProvider.module.scss';

type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

type AlertPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

type AlertProviderProps = {
  title?: string;
  message: string;
  severity?: AlertSeverity;
  showIcon?: boolean;
  placement?: AlertPlacement;
  timeout?: number;
};

type AlertContextType = {
  show(props: AlertProviderProps): void;
};

export const AlertContext = createContext({} as AlertContextType);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertProviderProps | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);

  const alertIcons: Record<AlertSeverity, ReactNode> = {
    success: <Icon icon="ph:check-circle-bold" />,
    info: <Icon icon="ph:info-bold" />,
    warning: <Icon icon="ph:warning-bold" />,
    error: <Icon icon="ph:warning-octagon-bold" />,
  };

  function show({
    severity = 'info',
    placement = 'bottom-right',
    timeout = 3000,
    ...props
  }: AlertProviderProps) {
    if (alert) {
      return;
    }
    setShowAlert(true);
    setAlert({
      ...props,
      severity,
      placement,
    });
  }

  useEffect(() => {
    if (alert) {
      const timeout = alert.timeout || 3000;
      const timer = setTimeout(() => {
        setShowAlert(false);
        setTimeout(() => {
          setAlert(null);
        }, 1000);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <AlertContext.Provider value={{ show }}>
      {children}
      {!!alert && (
        <Fade
          reverse={!showAlert}
          className={styles[alert.placement as AlertPlacement]}
          style={{
            position: 'fixed',
          }}
        >
          <Card
            ref={alertRef}
            className={cn(
              styles['alert'],
              styles[alert?.severity as AlertSeverity],
            )}
            role="alert"
          >
            <CardBody className={styles['alertBody']}>
              {alert?.showIcon && (
                <div className="size-8">
                  {alertIcons[alert.severity as AlertSeverity]}
                </div>
              )}
              <div className={styles['alertContent']}>
                {alert?.title && (
                  <h2 className="text-lg font-semibold">{alert.title}</h2>
                )}
                <p
                  className={cn(
                    styles['overflow-hidden'],
                    styles['text-sm'],
                    styles['alertMessage'],
                  )}
                >
                  {alert?.message}
                </p>
              </div>
            </CardBody>
          </Card>
        </Fade>
      )}
    </AlertContext.Provider>
  );
}
    