import { useState } from "react"
import { createContext } from "react"

export const studentContext = createContext()

export default function StudentProvider({children}){
    const [student,setStudent] = useState('')

    return(
        <studentContext.Provider value={{student,setStudent}}>
            {children}
        </studentContext.Provider>
    )
}