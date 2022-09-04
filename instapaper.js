import axios from 'axios'
import FormData from 'form-data'

export class Client {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    async addURL(url, title="", selection="", redirect="close") {
        try {
            const config = {
                method: 'post',
                url: "https://www.instapaper.com/api/add",
                auth: {
                    username: this.username,
                    password: this.password,
                },
                data: this.buildFormData(url, title, selection, redirect)
            }
        
            return await axios(config)
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    buildFormData(url, title, selection, redirect) {
        let data = new FormData()
        
        data.append('url', url)
        data.append('title', title)
        data.append('selection', selection)
        data.append('redirect', redirect)
       
        return data
    }
}