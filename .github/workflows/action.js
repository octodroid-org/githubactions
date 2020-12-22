import {v4 as uuidv4} from 'uuid'

// disable workflow commands
const token = uuidv4()
console.log(`::stop-commands::${token}`)

// log untrusted output
console.log("untrusted output")

// enable workflow commands
console.log(`::${token}::`)
