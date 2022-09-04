import { Client } from './instapaper.js'
import { username, password } from './config.js'

try {
    const client = new Client(username, password)
    const response =  await client.addURL("https://zetcode.com/javascript/axios/", "Axios tutorial")

    console.log("Status: ", response.status)
    console.log("Headers: ", response.headers)
    console.log("Data: ", response.data)
} catch (error) {
    console.error(error)
}