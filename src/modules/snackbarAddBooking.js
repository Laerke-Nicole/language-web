import { ref } from 'vue';

const dialogg = ref(null);

let snackbarAddBooking = () => {
    // dialogg.value.setAttribute("open", "");
    document.getElementById("dialogbox").setAttribute("open", "");
    setTimeout(() => { 
        // dialogg.value.removeAttribute("open");
        document.getElementById("dialogbox").removeAttribute("open");
    }, 4000);
}

export default snackbarAddBooking;