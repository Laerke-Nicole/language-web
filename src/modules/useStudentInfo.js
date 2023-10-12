import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, orderBy } from 'firebase/firestore';
import router from '../router'

const useStudentInfo = () => {

    // to store data from firebase
    const students = ref([]); 

    // tell the system where to get the information from (which collection)
    const studentDataRef = collection(db, 'students');

    // v-model is attached to this
    const AddStudentData = ref({
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",
        studentMsg: "",
    })

    // store documents
    const getStudentsData = () => {
        onSnapshot(studentDataRef, (snapshot) => {
            students.value = snapshot.docs.map(doc => {
                return {
                id: doc.id,
                ...doc.data()
                
                }
            })
        })
        console.log("document", students)
    }

    // accept the button that deletes that added student
    const firebaseDeleteSingleStudent = async (id) => {
        await deleteDoc(doc(db, "students", id));
        console.log("is deleted", id);
    }

    






    // // experimented with making it only push to the next page if all fields are filled in

    // const firebaseAddSingleStudent = async () => {
    //     if (
    //         AddStudentData.value.studentFirstName !== '' ||
    //         AddStudentData.value.studentLastName !== '' ||
    //         AddStudentData.value.studentEmail !== '' ||
    //         AddStudentData.value.studentMsg !== ''
    //     ) {
    //         alert("Please fill in all fields with your information");
    //     } else {
    //             // tell it where to go
    //             await addDoc(collection(db, "students"),
    //                 // tell it what to add
    //                 {
    //                     studentFirstName: AddStudentData.value.studentFirstName,
    //                     studentLastName: AddStudentData.value.studentLastName,
    //                     studentEmail: AddStudentData.value.studentEmail,
    //                     studentMsg: AddStudentData.value.studentMsg,
    //                 }
    //             )
    //             .then({
    //                 studentFirstName: AddStudentData.value.studentFirstName = '',
    //                 studentLastName: AddStudentData.value.studentLastName = '',
    //                 studentEmail: AddStudentData.value.studentEmail = '',
    //                 studentMsg: AddStudentData.value.studentMsg = '',
    //             })
    //             .then(() => {
    //                 router.push('/')
    //             })
            
    //             console.log("student added")
    //         }

    // };



// accept the button that adds item
const firebaseAddSingleStudent = async () => { 
    // tell it where to go
    await addDoc(collection(db, "students"),
        // tell it what to add
        {
            studentFirstName: AddStudentData.value.studentFirstName,
            studentLastName: AddStudentData.value.studentLastName,
            studentEmail: AddStudentData.value.studentEmail,
            studentMsg: AddStudentData.value.studentMsg,
        }
    )
    .then({
        studentFirstName: AddStudentData.value.studentFirstName = '',
        studentLastName: AddStudentData.value.studentLastName = '',
        studentEmail: AddStudentData.value.studentEmail = '',
        studentMsg: AddStudentData.value.studentMsg = '',
    })
    .then(() => {
        router.push('/')
    })

    console.log("student added")
}

    

    return {
        getStudentsData,
        students,
        firebaseDeleteSingleStudent,
        firebaseAddSingleStudent,
        AddStudentData,
    }
}

export default useStudentInfo