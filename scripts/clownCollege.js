import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const ClownCollege = () => {
    return `
        <h1>Button and Lollipops Fun Form</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}
