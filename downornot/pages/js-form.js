export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      date: event.target.date.value,
      time: event.target.time.value,
      details: event.target.details.value,
      location: event.target.location.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your event name: ${result.name}`)
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
        <li><input required class="p-1 text-center w-3/4 my-3 text-md border-none	xl:bg-black" type="text" id="name" name="name" placeholder="Enter event name"></input></li>
        <li><input required class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="date" name="date" placeholder="Enter date"></input></li>
        <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="time" name="time" placeholder="Enter time"></input></li>
        <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="details" name="details" placeholder="Enter details"></input></li>
        <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="location" name="location" placeholder="Enter location"></input></li>  
        <button type="submit" class="inline-block my-10 px-6 py-2.5 bg-green-500 text-white font-medium text-s leading-tight rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Create new event</button>
    </form>
  )
}