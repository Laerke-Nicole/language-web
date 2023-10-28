import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';
// import useImg from '../modules/useImgUpload.js'
import { getStorage, ref as refFB, uploadBytes } from "firebase/storage";

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
        // tell it where to go
        await addDoc(collection(db, "tutors"),
            // tell it what to add
            {
                tutorName: AddTutorData.value.tutorName,
                tutorSpeaks: AddTutorData.value.tutorSpeaks,
                tutorPrice: AddTutorData.value.tutorPrice,
                tutorAbout: AddTutorData.value.tutorAbout,
                tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle,
                tutorImg: AddTutorData.value.tutorImg,
                tutorLessons: AddTutorData.value.tutorLessons,
                tutorStudents: AddTutorData.value.tutorStudents,
                tutorAttendance: AddTutorData.value.tutorAttendance,
                tutorImg: AddTutorData.value.tutorImg,
            }
        )
        .then({
            tutorName: AddTutorData.value.tutorName = '',
            tutorSpeaks: AddTutorData.value.tutorSpeaks = '',
            tutorPrice: AddTutorData.value.tutorPrice = '',
            tutorAbout: AddTutorData.value.tutorAbout = '',
            tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle = '',
            tutorImg: AddTutorData.value.tutorImg = '',
            tutorLessons: AddTutorData.value.tutorLessons = '',
            tutorStudents: AddTutorData.value.tutorStudents = '',
            tutorAttendance: AddTutorData.value.tutorAttendance = '',
            tutorImg: AddTutorData.value.tutorImg = '',

            // add snackbar javascript here
            // maybe
            // snackbar.value = true
        })

        console.log("is added")
    }

    
    const firebaseUpdateSingleTutor = async (tutor) => { 
        //  debugger;
        
        const foundTutor = tutors.value.find(tutor => tutor.id === tutor.id);
    
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
            } = foundTutor;
    
            await updateDoc(doc(tutorDataRef, tutor.id), {
                tutorName,
                tutorSpeaks,
                tutorPrice,
                tutorAbout,
                tutorTeachingStyle,
                tutorLessons,
                tutorStudents,
                tutorAttendance,
                tutorImg,
            }).then(() => {  
            });
        }
    }


    // // image upload

    // // Create a root reference
    // const storage = getStorage();
    
    // // Create a reference to 'mountains.jpg'
    // const mountainsRef = refFB(storage, 'mountains.jpg');
    
    // // Create a reference to 'images/mountains.jpg'
    // const mountainImagesRef = refFB(storage, 'images/mountains.jpg');
    
    // // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name;           // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 


    // const storageRef = refFB(storage, 'images/mountains.jpg');

    // // Create file metadata including the content type
    // /** @type {any} */
    // const metadata = {
    // contentType: 'image/jpeg',
    // };

    // // Upload the file and metadata
    // const uploadTask = uploadBytes(storageRef, file, metadata);





    return {
        getTutorsData,
        tutors,
        firebaseDeleteSingleTutor,
        firebaseAddSingleTutor,
        AddTutorData,
        firebaseUpdateSingleTutor,
        UpdateTutorData
    }
}

export default useTutors