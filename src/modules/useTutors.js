import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';
//import useImg from '../modules/useImgUpload.js'
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
//import { tutorImg } from '../modules/useImgUpload.js';

// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import useImg from '../modules/useImgUpload.js';
const useTutors = () => {

    // to store data from firebase
    const tutors = ref([]); 
    // tell the system where to get the information from (which collection)
    const tutorDataRef = collection(db, 'tutors');

    // v-model is attached to this
    const AddTutorData = ref({
        tutorName: "",
        tutorSpeaks: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
        tutorLessons: "",
        tutorStudents: "",
        tutorAttendance: "",
        tutorImg: "",
    })


    const UpdateTutorData = ref({
        tutorName: "",
        tutorSpeaks: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
        tutorLessons: "",
        tutorStudents: "",
        tutorAttendance: "",
        tutorImg: "",
    })

    // store documents
    const getTutorsData = () => {
        onSnapshot(tutorDataRef, (snapshot) => {
            tutors.value = snapshot.docs.map(doc => {
                return {
                id: doc.id,
                ...doc.data()
                }
            })
        })
        console.log("document", tutors)
    }

    // accept the button that deletes that added item
    const firebaseDeleteSingleTutor = async (id) => {
        await deleteDoc(doc(db, "tutors", id));
        console.log("is deleted", id);
    }

    // accept the button that adds item

    const firebaseAddSingleTutor = async () => {
        const imageUrl = tutorImg.value; // Get the image URL from tutorImg
        console.log("image path", tutorImg.value)
        // Add the imageUrl to the data being added to Firebase
        await addDoc(collection(db, "tutors"), {
            tutorName: AddTutorData.value.tutorName,
            tutorSpeaks: AddTutorData.value.tutorSpeaks,
            tutorPrice: AddTutorData.value.tutorPrice,
            tutorAbout: AddTutorData.value.tutorAbout,
            tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle,
            tutorImg: imageUrl, // Use the image URL here
            tutorLessons: AddTutorData.value.tutorLessons,
            tutorStudents: AddTutorData.value.tutorStudents,
            tutorAttendance: AddTutorData.value.tutorAttendance,
        });
        // Reset the AddTutorData values here
        // ...
        console.log("is added");
    }


    // const firebaseAddSingleTutor = async () => { 
    //     // tell it where to go
    //     await addDoc(collection(db, "tutors"),
    //         // tell it what to add
    //         {
    //             tutorName: AddTutorData.value.tutorName,
    //             tutorSpeaks: AddTutorData.value.tutorSpeaks,
    //             tutorPrice: AddTutorData.value.tutorPrice,
    //             tutorAbout: AddTutorData.value.tutorAbout,
    //             tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle,
    //             tutorImg: AddTutorData.value.tutorImg,
    //             tutorLessons: AddTutorData.value.tutorLessons,
    //             tutorStudents: AddTutorData.value.tutorStudents,
    //             tutorAttendance: AddTutorData.value.tutorAttendance,
    //             tutorImg: AddTutorData.value.tutorImg,
    //         }
    //     )
    //     .then({
    //         tutorName: AddTutorData.value.tutorName = '',
    //         tutorSpeaks: AddTutorData.value.tutorSpeaks = '',
    //         tutorPrice: AddTutorData.value.tutorPrice = '',
    //         tutorAbout: AddTutorData.value.tutorAbout = '',
    //         tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle = '',
    //         tutorImg: AddTutorData.value.tutorImg = '',
    //         tutorLessons: AddTutorData.value.tutorLessons = '',
    //         tutorStudents: AddTutorData.value.tutorStudents = '',
    //         tutorAttendance: AddTutorData.value.tutorAttendance = '',
    //         tutorImg: AddTutorData.value.tutorImg = '',
    //     })

    //     console.log("is added")
    // }

    
    // const firebaseUpdateSingleTutor = async (tutor) => { 
        
    //     const foundTutor = tutors.value.find(tutor => tutor.id === tutor.id);
    
    //     if (foundTutor) {
    //         const {
    //             tutorName,
    //             tutorSpeaks,
    //             tutorPrice,
    //             tutorAbout,
    //             tutorTeachingStyle,
    //             tutorLessons,
    //             tutorStudents,
    //             tutorAttendance,
    //             tutorImg,
    //         } = foundTutor;
    
    //         await updateDoc(doc(tutorDataRef, tutor.id), {
    //             tutorName,
    //             tutorSpeaks,
    //             tutorPrice,
    //             tutorAbout,
    //             tutorTeachingStyle,
    //             tutorLessons,
    //             tutorStudents,
    //             tutorAttendance,
    //             tutorImg,
    //         }).then(() => {  
    //         });
    //     }
    // }

    const firebaseUpdateSingleTutor = async (tutorToUpdate) => { 
        const foundTutor = tutors.value.find(t => t.id === tutorToUpdate.id);
        
        if (foundTutor) {
            const {
                tutorName,
                tutorSpeaks,
                tutorPrice,
                tutorAbout,
                tutorTeachingStyle,
                tutorLessons,
                tutorStudents,
                tutorAttendance,
                tutorImg,
            } = tutorToUpdate;
    
            await updateDoc(doc(tutorDataRef, tutorToUpdate.id), {
                tutorName,
                tutorSpeaks,
                tutorPrice,
                tutorAbout,
                tutorTeachingStyle,
                tutorLessons,
                tutorStudents,
                tutorAttendance,
                tutorImg,
            });
        }
    }
    


    // // image upload
    // const storage = getStorage();
    
    // // Firebase storage upload image + get download URL + enable button after image uploaded
    // const uploadImg = async(tutor) => {
    //     let file = tutor.target.files[0]; // get the file
    //     console.log("file", file)
    // }

    // const storageRef = refFB(storage, file.name);


    // // Create file metadata including the content type
    // /** @type {any} */
    // const metadata = {
    // contentType: 'image/jpeg',
    // };

    // // Upload the file and metadata
    // const uploadBtn = uploadBytes(storageRef, file, metadata);



    // // image upload
    // const storage = getStorage();

    // const useImg = () => {
    //     let file; // Define the 'file' variable here

    //     const tutorImg = vueref(''); // Create a variable to store the image URL link

    //     // Firebase storage upload image + get download URL + enable button after image uploaded
    //     const uploadImg = async (event) => {
    //         file = event.target.files[0]; // Get the file from the event
    //         console.log("file", file);

    //         // Create the file metadata
    //         const metadata = {
    //             contentType: 'image/jpeg',
    //         };

    //         // Upload file and metadata to the object 'images/mountains.jpg'
    //         const storageRef = ref(storage, 'images/' + file.name);
    //         const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    //         // Listen for state changes, errors, and completion of the upload.
    //         uploadTask.on('state_changed', (snapshot) => {
    //             // Handle upload progress and completion here.
    //             // ...

    //             // Upload completed successfully - get the download URL
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 console.log('File available at', downloadURL);

    //                 tutorImg.value = downloadURL; // Update the variable tutorImg with the image URL link.
    //             });
    //         });
    //     };
    // }



    return {
        getTutorsData,
        tutors,
        firebaseDeleteSingleTutor,
        firebaseAddSingleTutor,
        AddTutorData,
        firebaseUpdateSingleTutor,
        UpdateTutorData,
        // useImg,
    }
}

export default useTutors