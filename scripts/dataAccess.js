import { mainContainer } from "./main.js"


const applicationState = {
    requests:[],
    completions: [],
    plumbers: []
}

const API = "http://localhost:8088"


export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.requests = data
            }
        )
}

export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
    .then(response => response.json())
    .then(
        (servicePlumbers) => {
            // Store the external state in application state
            applicationState.plumbers = servicePlumbers
        }
        )
    }
export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (serviceCompletions) => {
                // Store the external state in application state
                applicationState.completions = serviceCompletions
            }
            )
    }



export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}
export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({...plumber}))
}


export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



export const saveCompletions = (completionRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completionRequest)
    }


    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}






export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

