import {toast} from "react-toastify"

export const showToastNotification = (message) => {
    toast.error(message || "Server Error", {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const showSuccessToastNotification = (message) => {
    toast.success(message || "Success", {
        position: toast.POSITION.TOP_RIGHT
    })
}