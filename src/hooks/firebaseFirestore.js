import React from 'react'
import { collection, getFirestore, onSnapshot, docs, doc, addDoc } from "firebase/firestore"
import { useEffect } from 'react'
import { useState } from 'react'
import Firebase from "../firebase/firebase"
import { useFirebaseStorage } from "./firebaseStorage"

export function useFirebaseFirestore(image) {
    const [Upload, ImageUrl] = useFirebaseStorage()
    const [userData, setuserData] = useState([])
    const [userInput, setUserInput] = useState({ Name: "", Age: "", ImgUrl: "" })
    // console.log(userInput);
    const db = getFirestore(Firebase)

    useEffect(() => (
        () => onSnapshot(collection(db, "products"), (snapshot) => {
            setuserData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        })

    ), [])

    console.log(ImageUrl);
    const NewData = () => {
        Upload(image)
    }
    useEffect(() => {

        const UploadServer = async () => {
            const collectionref = collection(db, "users")
            const payload = { Name: userInput.Name, Age: userInput.Age, ImgUrl: ImageUrl }

            if (ImageUrl && userInput.Name && userInput.Age) {
                await addDoc(collectionref, payload)
                setUserInput({ ...userInput, Name: "", Age: "", ImgUrl: "" })
                window.location.reload()
            }
        }
        UploadServer()

    }, [ImageUrl])


    return [userData, setUserInput, userInput, NewData]
}

