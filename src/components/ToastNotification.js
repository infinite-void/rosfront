import {toast} from "react-toastify"

export const showToastNotification = () => {
    toast.error("Server Error", {
        position: toast.POSITION.TOP_RIGHT
    })
}