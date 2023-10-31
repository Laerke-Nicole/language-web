import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as vueref } from 'vue';

const storage = getStorage();

let file; // Define the 'file' variable here

const tutorImg = vueref(''); // Create a variable to store the image URL link

// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async (event) => {
    file = event.target.files[0]; // Get the file from the event
    console.log("file", file);

    // Create the file metadata
    const metadata = {
        contentType: 'image/jpeg',
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', (snapshot) => {
        // Handle upload progress and completion here.
        // ...

        // Upload completed successfully - get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);

            tutorImg.value = downloadURL; // Update the variable tutorImg with the image URL link.
        });
    });
};

export { tutorImg, uploadImg };

export default { uploadImg, tutorImg };




// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { ref as vueref } from 'vue';

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
//     return { uploadImg, tutorImg };
// }


// export default useImg;
// export const tutorImg = vueref('');


// import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage'
// // import { getStorage, ref, uploadBytes } from "firebase/storage";

// // import { getStorage, ref, uploadBytes } from "firebase/storage";

// // Create a root reference

// // // Create a reference to 'mountains.jpg'
// // const storageRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'

// // // While the file names are the same, the references point to different files
// // mountainsRef.name === mountainImagesRef.name;           // true
// // mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

// import { ref as vueref } from 'vue'

// const storage = getStorage();

// //const uploadTask = ref(storageRef, file, metadata);
// //const storageRef = uploadBytesResumable(storage, '/images/' + file.name);

// let tutorImg = vueref(''); // create a variable to store the image URL link

// // 'file' comes from the Blob or File API
// // uploadBytes(storageRef, file).then((snapshot) => {
// //   console.log('Uploaded file!');
// // });



// const useImg = () => {
//  //   const storage = getStorage();

//    // const uploadBtn = ref('true')

//     // Firebase storage upload image + get download URL + enable button after image uploaded
//     const uploadImg = async(event) => {
//         let file = event.target.files[0]; // get the file
//         console.log("file", file)
//     }
    
//     // Create the file metadata
//     /** @type {any} */
//     const metadata = {
//     contentType: 'image/jpeg'
//     };
    
    
//     // Upload file and metadata to the object 'images/mountains.jpg'
//     const storageRef = ref(storage, 'images/' + file.name);
//     const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
    
    
//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on('state_changed',
//       (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//           case 'paused':
//             console.log('Upload is paused');
//             break;

//           case 'running':
//             console.log('Upload is running');       
//             break;
//         }
//       }, 
//       (error) => {
//         switch (error.code) {
//           case 'storage/unauthorized':
//             // User doesn't have permission to access the object
//             break;

//           case 'storage/canceled':
//             // User canceled the upload
//             break;
    
//           case 'storage/unknown':
//             // Unknown error occurred, inspect error.serverResponse
//             break;
//         }
//       }, 
//       () => {
//         // Upload completed successfully - get the download URL
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log('File available at', downloadURL);
    
//           tutorImg.value = downloadURL // update variable tutorImg and put the image URL link in it. 
//         //  uploadBtn.value = false // enable button after image uploaded is complete
//         });
//       }  
//     );
    
// }

// export default useImg;






// /** 
//  * 
//  * 
// */



// // const useImg = () => {
// //     const storage = getStorage();
// //     const storageRef = ref(storage, file.name);

// //     // Firebase storage upload image + get download URL + enable button after image uploaded
// //     const uploadImg = async(tutor) => {
// //         let file = tutor.target.files[0]; // get the file
// //         console.log("file", file)
// //     }

// //     // Create file metadata including the content type
// //     /** @type {any} */
// //     const metadata = {
// //     contentType: 'image/jpeg',
// //     };

// //     // Upload the file and metadata
// //     const uploadBtn = uploadBytes(storageRef, file, metadata);

// // }

// // export default useImg;
