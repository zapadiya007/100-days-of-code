const form = document.querySelector('form')
const input = document.querySelector('.finput')


form.addEventListener('submit',
    (e) => {
        e.preventDefault()
        const formData = new FormData(form)

        for (const pair of formData.entries()) {


            document.write(pair[0] + " : " + pair[1])
            document.write("<br>")
            console.log(pair)
        }
    }
)                               