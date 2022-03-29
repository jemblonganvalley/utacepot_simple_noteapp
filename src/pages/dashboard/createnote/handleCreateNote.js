import {v4 as uuidv4} from "uuid"
import moment from "moment"

export const handleCreateNote = async(e)=>{
    e.preventDefault()
    try {
        const {title, content} = e.target

        if(!title.value || !content.value){
            return alert("silakan isi note")
        }

        let newNote = {
            title : title.value,
            content : content.value,
            id : uuidv4(),
            createdAt : moment().format("DD/MM/YYYY hh:mm")
        }

        let getPrevNote = await localStorage.getItem("_notes") // "[]"
        getPrevNote = await JSON.parse(getPrevNote) // js array []
        getPrevNote = [...getPrevNote, newNote] //[{asdfasd}, {asdfasdf}]

        let storeToLocal = await localStorage.setItem("_notes", JSON.stringify(getPrevNote))

        return window.location.href = "/dashboard/home"

    } catch (error) {
        console.error(error)
    }
}

// code yang bertugas buat storage note apabila belum ada
export const checkNote = async()=>{
    try {
        const checkNote = await localStorage.getItem("_notes")

        if(!checkNote){
            return localStorage.setItem("_notes", "[]")
        }

        let parseNote = await JSON.parse(checkNote)
        return parseNote

    } catch (error) {
        console.error(error)
    }
}