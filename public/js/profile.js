const newFormHandler = async (event) => {
    event.preventDefault();

    const distance = document.querySelector('#run-distance').value.trim();
    const duration = document.querySelector('#run-time').value.trim();
    const notes = document.querySelector('#run-note').value.trim();
console.log(distance);
    if (distance && duration && !notes) { 
        const runs = await fetch('/api/run', { 
            method: 'POST', 
            body: JSON.stringify({ distance, duration }),
            headers: { 'Content-Type': 'application/json'},
        }); 

        if (runs.ok) { 
            document.location.replace('/profile'); 
        } else {
            alert ('Your run wasnt logged')
        }
    }

    if(distance && duration && notes) { 
        const runs = await fetch('/api/run', { 
            method: 'POST', 
            body: JSON.stringify({ distance, duration, notes }), 
            headers: { 'Content-Type': 'application/json'},
        }); 
        
        if (runs.ok) { 
            document.location.replace('/profile'); 
        } else {
            alert ('Your run wasnt logged')
        }
    }
}

document.querySelector('.run-form').addEventListener('submit', newFormHandler);
  

