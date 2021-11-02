const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    const creator = req.session.name

    if (content) {
        const response = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({content, creator}),
            headers: { 'Content-Type': 'application/json'},
        })

        if (response.ok) {
            document.location.replace('/homepage')
        }else {
            alert('Failed to post')
        }
    }
    // const creator = document.querySelector('#')
};

document
    .querySelector('#comment')
    .addEventListener('submit', commentFormHandler);