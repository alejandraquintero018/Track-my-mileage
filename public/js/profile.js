const { response } = require("express");

const newFormHandler = async (event) => {
    event.preventDefault();

    const distance = document.querySelector('#run-distance').value.trim();
    const time = document.querySelector('#run-time').value.trim();
    const note = document.querySelector('#run-note').value.trim();

    if (distance && time) { 
        const runs = await fetch('/api/run', { 
            method: 'POST', 
            body: JSON.stringify({ distance, time })
        }); 

        if (response.ok) { 
            document.location.replace('/profile'); 
        } else {
            alert ('Your run wasnt logged')
        }
    }
}

document.querySelector('.run-form').addEventListener('submit', newFormHandler);
  

const getData = async ( )