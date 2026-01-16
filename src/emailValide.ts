export function isValidEmail(email:String): boolean {
    if(!email.includes('@')){
        return false;
    }

    if(email.includes(' ')){
        return false;
    }

    const partialEmail = email.split('@')
    if(partialEmail.length !== 2){
        return false;
    }
    if (partialEmail[0]?.length === 0 || partialEmail[1]?.length === 0){
        return false;
    }
    return true;
}