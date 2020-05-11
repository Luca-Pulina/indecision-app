const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer ',
    options: ['One', 'Two']
}

const onFormSubmit = (event) => {
    event.preventDefault()

    const option = event.target.elements.option.value

    if (option) {
        app.options.push(option)
        event.target.elements.option.value = ''
        render()
    }
}

const removeAllOptions = (event) => {
    event.preventDefault()
    app.options = []
    render()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)

}

const appRoot = document.getElementById('app')



const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h3>{app.subtitle}</h3>}
            <p>{app.options.length > 0 ? 'Here your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What I should do ?</button>
            <button onClick={removeAllOptions}>Remove all Options</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()
