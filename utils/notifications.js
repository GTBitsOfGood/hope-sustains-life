import { toast } from "react-toastify";

const defaultToastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  closeOnClick: true,
  draggable: true,
};

export const showSuccessNotification = (
  message,
  toastOptions = defaultToastOptions
) => {
  toast.success(message, toastOptions);
};

export const showErrorNotification = (
  message,
  toastOptions = defaultToastOptions
) => {
  toast.error(message, toastOptions);
};

export const showWarningNotification = (
  message,
  toastOptions = defaultToastOptions
) => {
  toast.warning(message, toastOptions);
};
