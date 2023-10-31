import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';
import { getStorage, ref as refFB, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


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
            tutorImg: imageUrl, 
            tutorLessons: AddTutorData.value.tutorLessons,
            tutorStudents: AddTutorData.value.tutorStudents,
            tutorAttendance: AddTutorData.value.tutorAttendance,
        })
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
        })

        console.log("tutor is added");
    }

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


    // image upload
    // Firebase storage upload image + get download URL
    const storage = getStorage();
    const tutorImg = ref(''); // Create a variable to store the image URL link

    const uploadImg = async(event) => {
        let file = event.target.files[0];
        console.log("file", file)
    
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };
        
        
        // Upload file
        const storageRef = refFB(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        
        
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');       
                break;
            }
            }, 
            (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
                case 'storage/canceled':
                // User canceled the upload
                break;
        
                // ...
        
                case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            }, 
            () => {
            // Upload completed successfully - get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
        
                tutorImg.value = downloadURL // update tutorImg and put the image URL link in it. 
            });
            }  
        );
    }

    return {
        getTutorsData,
        tutors,
        firebaseDeleteSingleTutor,
        firebaseAddSingleTutor,
        AddTutorData,
        firebaseUpdateSingleTutor,
        UpdateTutorData,
        uploadImg,
    }
}

export default useTutors