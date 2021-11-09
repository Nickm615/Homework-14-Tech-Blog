const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    // const creator = req.session.name
    // console.log('==============================================================')
    // console.log(content)
    // console.log('==============================================================')


    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: { 'Content-Type': 'application/json'},
        })

        if (response.ok) {
            document.location.replace('/homepage')
        }else {
            alert('Failed to post')
        }
    }

};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);