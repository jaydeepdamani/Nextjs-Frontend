import Toast from "./toastSweetAlert";

export const errorHandler = (error) => {
    console.log("error>>>", error)
    return Toast.fire({
        icon: 'error',
        title: error && error.data ? error.data.message : "Internal server error."
    })
}

export const url = process.env.REACT_APP_API_ENDPOINT;
