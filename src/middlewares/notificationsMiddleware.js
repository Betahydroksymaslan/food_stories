import { toast } from 'react-toastify';

const notificationsMiddleware = () => (next) => (action) => {
  const successType = /(.*)_(SUCCESS)/.test(action.type);

  const failureType = /(.*)_(ERROR)/.test(action.type);

  if (successType) {
    toast.success(action.payload);
  } else if (failureType) {
    toast.error(action.payload);
  }

  next(action);
};

export default notificationsMiddleware;
