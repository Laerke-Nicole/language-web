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
        productPrice: ""
    })


    const UpdateProductData = ref({
        productName: "",
        productPrice: ""
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
                productPrice: AddProductData.value.productPrice
            }
        )
        .then({
            productName: AddProductData.value.productName = '',
           productPrice: AddProductData.value.productPrice = ''
        })

        console.log("is added")
    }

    // update information                  // make it use the information we have
    const firebaseUpdateSingleItem = async (product) => { 
        await updateDoc(doc(productDataRef, product), {
            productName: products.value.find(product => product.id === product.id).productName,
            // productName: UpdateProductData.value.productName,
            // productPrice: 200
        }).then(() => {
            UpdateProductData.value.productName = ''
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