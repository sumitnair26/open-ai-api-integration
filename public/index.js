
// forms
const metaForm = document.querySelector('.meta-form');
const imageForm = document.querySelector('.image-form');

//output elements
const description = document.querySelector('.description p');
const tags = document.querySelector('.tags p');

const thumbnail = document.querySelector('.thumbnail img');

//description and tags
metaForm.addEventListener('submit', async (e) => {

        e.preventDefault()

        const res = await fetch('/openai/meta', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title: metaForm.title.value})
        })

        const data = await res.json()

        console.log(data)

        description.textContent = data.description.content
        tags.textContent = data.tags.content

})

//Function to get YouTube Thumbnail
imageForm.addEventListener('submit', async(e) => {
    e.preventDefault()

    const res = await fetch('/openai/image', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prompt:  imageForm.prompt.value})
    })

    const data = await res.json()

    console.log(data)

    thumbnail.setAttribute('src', data.url)

})