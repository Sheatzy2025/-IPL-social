export function isValidEmail(email:String): boolean {
    if(!email.includes('@')){
        return false;
    }

    if(email.includes(' ')){
        return false;
    }
    return true;
}