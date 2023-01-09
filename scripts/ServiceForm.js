import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendees">Number of Attendees</label>
            <input type="number" name="attendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="hoursBooked">Hours Booked</label>
            <input type="number" name="hoursBooked" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const childName = document.querySelector("input[name='childName']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userAttendees = document.querySelector("input[name='attendees']").value
        const hoursBooked = document.querySelector("input[name='hoursBooked']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attendees: userAttendees,
            address: userAddress,
            date: userDate,
            hoursBooked: hoursBooked
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})