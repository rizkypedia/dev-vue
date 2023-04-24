import parsePhoneNumber from 'libphonenumber-js';
import isValidPhoneNumber from 'libphonenumber-js';

class PhonenumberValidator {
    constructor(Phonenumber, country) {
        this.Phonenumber = Phonenumber
        this.country = country
    }

    validate() {
        console.log(this.Phonenumber)
        return isValidPhoneNumber(this.Phonenumber, this.country);
    }
}

export default PhonenumberValidator;