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
        tutorDescription: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
    })


    const UpdateTutorData = ref({
        tutorName: "",
        tutorSpeaks: "",
        tutorDescription: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
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
        console.log("test", tutors)
    }

    // accept the button that deletes that adds item
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
                tutorDescription: AddTutorData.value.tutorDescription,
                tutorPrice: AddTutorData.value.tutorPrice,
                tutorAbout: AddTutorData.value.tutorAbout,
                tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle,
                tutorImg: AddTutorData.value.tutorImg,
            }
        )
        .then({
            tutorName: AddTutorData.value.tutorName = '',
            tutorSpeaks: AddTutorData.value.tutorSpeaks = '',
            tutorDescription: AddTutorData.value.tutorDescription = '',
            tutorPrice: AddTutorData.value.tutorPrice = '',
            tutorAbout: AddTutorData.value.tutorAbout = '',
            tutorTeachingStyle: AddTutorData.value.tutorTeachingStyle = '',
            tutorImg: AddTutorData.value.tutorImg = '',
        })

        console.log("is added")
    }

    // update information                  // make it use the information we have
    const firebaseUpdateSingleItem = async (tutor) => { 
        await updateDoc(doc(tutorDataRef, tutor), {
            tutorName: tutors.value.find(tutor => tutor.id === tutor.id).tutorName,
            tutorSpeaks: tutors.value.find(tutor => tutor.id === tutor.id).tutorSpeaks,
            tutorDescription: tutors.value.find(tutor => tutor.id === tutor.id).tutorDescription,
            tutorPrice: tutors.value.find(tutor => tutor.id === tutor.id).tutorPrice,
            tutorAbout: tutors.value.find(tutor => tutor.id === tutor.id).tutorAbout,
            tutorTeachingStyle: tutors.value.find(tutor => tutor.id === tutor.id).tutorTeachingStyle,
            tutorImg: tutors.value.find(tutor => tutor.id === tutor.id).tutorImg,
        }).then(() => {
            UpdateTutorData.value.tutorName = ''
            UpdateTutorData.value.tutorSpeaks = ''
            UpdateTutorData.value.tutorDescription = ''
            UpdateTutorData.value.tutorPrice = ''
            UpdateTutorData.value.tutorAbout = ''
            UpdateTutorData.value.tutorTeachingStyle = ''
            UpdateTutorData.value.tutorImg = ''
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