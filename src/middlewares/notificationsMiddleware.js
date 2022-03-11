import { toast } from 'react-toastify';

const notificationsMiddleware = () => (next) => (action) => {
  const successType = /(.*)_(SUCCESS)/.test(action.type);

  const failureType = /(.*)_(ERROR)/.test(action.type);

  if (successType && action.payload) {
    toast.success(` ${action.payload}`, {
      theme: 'light',
    });
  } else if (failureType && action.payload) {
    toast.error(action.payload);
  }

  next(action);
};

export default notificationsMiddleware;
