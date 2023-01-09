import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"
import { saveCompletions } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns()
    let html = `
        <ul>
            ${requests.map(
                (request) => {
                    return `
                            <li>
                                ${request.parentName} needed at ${request.address}, hours needed ${request.hoursBooked} with ${request.attendees} guests needed on ${request.date}
                                <select class="clowns" id="clowns"><option value="">Choose</option>
                                        ${
                                            clowns.map(
                                                clown => {
                                                    return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                                                }
                                            ).join("")
                                        }

                                    </select>
                                    <button class="request__delete" id="request--${request.id}">
                                    Delete
                                    </button>
                            </li>`

                }).join("")
            }
        </ul>
    `

    return html
}




const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

          
           const completionRequest = {
                requestId: requestId,
                clownId: clownId,
                date_created: Date.now()       
           }
    
                saveCompletions(completionRequest);
        }
    }
)
