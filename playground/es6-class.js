// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public --port=4300

class Person {
    constructor(name = 'No name') {
        this.name = name
    }

}

const me = new Person('Luca Pulina')