import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const signinUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=>unsubscribed;
    }, [])
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=>setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signinUsingGoogle,
        logout,
    }
   
}
export default useFirebase;