function sendMessage() {
  let messageText = getMessageText()
  let method = getMessageMethod()
  let url = getURL()

  // for using fetch see
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  if (method === 'POST') {
    fetch(url, {
      method: method,
      /* omitting JSON.stringify will cause errors
	 in the backend since javascript will call the 
	 toString function on the newly created 
	 { message: messageText } object. Since it has no
	 toString method implemented by us it will default
	 to [object Object] which isn't proper JSON and
	 definitely not what we want */
      body: JSON.stringify({
	/* Note that the name "message" is arbitarily picked 
	   by me since it makes sense in this context. If
	   you wanted it to be called "foo" or something
	   else that would be equally fine as long as you make
	   apropriate changes to the backend as well */
	message: messageText
      })
    })
    
    // for the ".then" notation see: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
      .then(reply => reply.json())

    // => is "fat arrow" notation for anonymous functions. See:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      .then(json => {
	console.log(json)
      })
  }

  if (method === 'GET') {
    
    // the method isn't specified here because GET is the default
    fetch(url + '?message=' + messageText)
      .then(reply => {
	/* Note that only network errors are caught in the catch()
	   further down such as the server not responding at all 
	   or that the request has been blocked by the browser 
	   itself it does *not* catch http errors such as 404 or 500
	   errors! For error codes see: 
	   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
	*/

	if (!reply.ok) {
	  // http error handling code

	  console.error(reply)
	  throw new Error('Bad server response: ' + reply.status + ' ' + reply.statusText)
	}

	// this is only reached by replies with an http responses
	// within in the 2xx range since all of those are OK
	
	return reply.text()
      })
      .then(text => console.log(text))
      .catch(errorObject => {
	// handle exceptions and network errors here

	console.log('Network error: ', errorObject.message)
      })
  }

}

function getMessageText() {
  let inputElement = document.getElementById('message-input')
  return inputElement.value
}

function getMessageMethod() {
  let methodSelector = document.getElementById('method-selector')
  return methodSelector.value
}

function getURL() {
  let urlInput = document.getElementById('url-input')
  if (urlInput.value.length === 0) {
    
    // reddish pink
    urlInput.style.background = '#ff7b7b'
    
    throw new Error('Empty URL')
  }

  return urlInput.value
}
