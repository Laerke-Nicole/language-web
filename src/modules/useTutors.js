import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';

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
    })

    // store documents
    const getTutorsData = () => {
        onSnapshot(tutorDataRef, (snapshot) => {
            tutors.value = snapshot.docs.map(doc => {
                return {
                id: doc.id,
                ...doc.data()
                
                // productName: doc.data().productName,
                // productPrice: doc.data().productPrice,
                }
            })
        })
        console.log("document", tutors)
    }

    // accept the button that deletes that added item
    const firebaseDeleteSingleItem = async (id) => {
        await deleteDoc(doc(db, "tutors", id));
        console.log("is deleted", id);
    }

    // accept the button that adds item
    const firebaseAddSingleItem = async () => { 
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
        })

        console.log("is added")
    }

    // update information                  // make it use the information we have
    const firebaseUpdateSingleItem = async (tutor) => { 
        await updateDoc(doc(tutorDataRef, tutor), {
            tutorName: tutors.value.find(tutor => tutor.id === tutor.id).tutorName,
            tutorSpeaks: tutors.value.find(tutor => tutor.id === tutor.id).tutorSpeaks,
            tutorPrice: tutors.value.find(tutor => tutor.id === tutor.id).tutorPrice,
            tutorAbout: tutors.value.find(tutor => tutor.id === tutor.id).tutorAbout,
            tutorTeachingStyle: tutors.value.find(tutor => tutor.id === tutor.id).tutorTeachingStyle,
            tutorImg: tutors.value.find(tutor => tutor.id === tutor.id).tutorImg,
            tutorLessons: tutors.value.find(tutor => tutor.id === tutor.id).tutorLessons,
            tutorStudents: tutors.value.find(tutor => tutor.id === tutor.id).tutorStudents,
            tutorAttendance: tutors.value.find(tutor => tutor.id === tutor.id).tutorAttendance,
        }).then(() => {
            UpdateTutorData.value.tutorName = ''
            UpdateTutorData.value.tutorSpeaks = ''
            UpdateTutorData.value.tutorPrice = ''
            UpdateTutorData.value.tutorAbout = ''
            UpdateTutorData.value.tutorTeachingStyle = ''
            UpdateTutorData.value.tutorImg = ''
            UpdateTutorData.value.tutorLessons = ''
            UpdateTutorData.value.tutorStudents = ''
            UpdateTutorData.value.tutorAttendance = ''
        })
    }


    return {
        getTutorsData,
        tutors,
        firebaseDeleteSingleItem,
        firebaseAddSingleItem,
        AddTutorData,
        firebaseUpdateSingleItem,
        UpdateTutorData
    }
}

export default useTutors