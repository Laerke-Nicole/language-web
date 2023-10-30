import { ref } from 'vue';

const dialogg = ref(null);

let snackbarAddTutor = () => {
    // dialogg.value.setAttribute("open", "");
    document.getElementById("dialogbox").setAttribute("open", "");
    setTimeout(() => { 
        // dialogg.value.removeAttribute("open");
        document.getElementById("dialogbox").removeAttribute("open");
    }, 2000);
}

export default snackbarAddTutor;