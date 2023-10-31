
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = ref(null); // to store the user

const auth = getAuth();

onAuthStateChanged(auth, (authUser) => {
  // This function will be called whenever the authentication state changes
  // Set the user variable to the authenticated user or null if not authenticate
  user.value = authUser;
});

const isLoggedIn = () => {
  return user.value !== null;
};

export default isLoggedIn;