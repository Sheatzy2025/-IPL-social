export function isValidEmail(email:string): boolean {
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

    const leftEmail = partialEmail[0];
    const rightEmail = partialEmail[1];

    if (leftEmail?.length === 0 || rightEmail?.length === 0){
        return false;
    }

    if(!rightEmail?.includes('.')) return false;
    if(rightEmail.lastIndexOf('.') === rightEmail.length - 1) return false;


    return true;
}