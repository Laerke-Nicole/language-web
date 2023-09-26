import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, doc, onSnapshot, deleteDoc, addDoc, updateDoc, orderBy } from 'firebase/firestore';

const useProducts = () => {

    // to store data from firebase
    const products = ref([]); 
    // tell the system where to get the information from (which collection)
    const productDataRef = collection(db, 'products');

    // v-model is attached to this
    const AddProductData = ref({
        productName: "",
        productPrice: "",

        tutorName: "",
        tutorSpeaks: "",
        tutorDescription: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
    })


    const UpdateProductData = ref({
        productName: "",
        productPrice: "",

        tutorName: "",
        tutorSpeaks: "",
        tutorDescription: "",
        tutorPrice: "",
        tutorAbout: "",
        tutorTeachingStyle: "",
        tutorImg: "",
    })

    // store documents
    const getProductsData = () => {
        onSnapshot(productDataRef, (snapshot) => {
            products.value = snapshot.docs.map(doc => {
                return {
                id: doc.id,
                ...doc.data()
                // productName: doc.data().productName,
                // productPrice: doc.data().productPrice,
                }
            })
        })
        console.log("test", products)
    }

    // accept the button that deletes that adds item
    const firebaseDeleteSingleItem = async (id) => {
        await deleteDoc(doc(db, "products", id));
        console.log("is deleted", id);
    }

    // accept the button that adds item
    const firebaseAddSingleItem = async () => { 
        // tell it where to go
        await addDoc(collection(db, "products"),
            // tell it what to add
            {
                productName: AddProductData.value.productName,
                productPrice: AddProductData.value.productPrice,


                tutorName: AddProductData.value.tutorName,
                tutorSpeaks: AddProductData.value.tutorSpeaks,
                tutorDescription: AddProductData.value.tutorDescription,
                tutorPrice: AddProductData.value.tutorPrice,
                tutorAbout: AddProductData.value.tutorAbout,
                tutorTeachingStyle: AddProductData.value.tutorTeachingStyle,
                tutorImg: AddProductData.value.tutorImg,
            }
        )
        .then({
            productName: AddProductData.value.productName = '',
            productPrice: AddProductData.value.productPrice = '',
           
            tutorName: AddProductData.value.tutorName = '',
            tutorSpeaks: AddProductData.value.tutorSpeaks = '',
            tutorDescription: AddProductData.value.tutorDescription = '',
            tutorPrice: AddProductData.value.tutorPrice = '',
            tutorAbout: AddProductData.value.tutorAbout = '',
            tutorTeachingStyle: AddProductData.value.tutorTeachingStyle = '',
            tutorImg: AddProductData.value.tutorImg = '',
        })

        console.log("is added")
    }

    // update information                  // make it use the information we have
    const firebaseUpdateSingleItem = async (product) => { 
        await updateDoc(doc(productDataRef, product), {
            productName: products.value.find(product => product.id === product.id).productName,

            tutorName: products.value.find(product => product.id === product.id).tutorName,
            tutorSpeaks: products.value.find(product => product.id === product.id).tutorSpeaks,
            tutorDescription: products.value.find(product => product.id === product.id).tutorDescription,
            tutorPrice: products.value.find(product => product.id === product.id).tutorPrice,
            tutorAbout: products.value.find(product => product.id === product.id).tutorAbout,
            tutorTeachingStyle: products.value.find(product => product.id === product.id).tutorTeachingStyle,
            tutorImg: products.value.find(product => product.id === product.id).tutorImg,


            // productName: UpdateProductData.value.productName,
            // productPrice: 200
        }).then(() => {
            UpdateProductData.value.productName = ''
            UpdateProductData.value.productPrice = ''
            
            UpdateProductData.value.tutorName = ''
            UpdateProductData.value.tutorSpeaks = ''
            UpdateProductData.value.tutorDescription = ''
            UpdateProductData.value.tutorPrice = ''
            UpdateProductData.value.tutorAbout = ''
            UpdateProductData.value.tutorTeachingStyle = ''
            UpdateProductData.value.tutorImg = ''
        })
    }

    return {
        getProductsData,
        products,
        firebaseDeleteSingleItem,
        firebaseAddSingleItem,
        AddProductData,
        firebaseUpdateSingleItem,
        UpdateProductData
    }
}

export default useProducts