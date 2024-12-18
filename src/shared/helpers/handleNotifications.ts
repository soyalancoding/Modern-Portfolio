// Notifications
import { toast } from "react-toastify";

export function pushNotification(type: string, message: string, theme: string) {
  switch (type) {
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme,
        progress: undefined,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme,
        progress: undefined,
      });
      break;
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme,
        progress: undefined,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme,
        progress: undefined,
      });
      break;
    default:
      break;
  }
}
