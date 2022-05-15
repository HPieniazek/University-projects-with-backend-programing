class Company{
    name:    string;
    adress?: string;
    phone:   string;
    nip:     string;
    email:   string;
    domain:  string

    constructor(company: Company){
        this.name   = company.name;
        this.adress = company.adress;
        this.phone  = company.phone;
        this.nip    = company.nip;
        this.email  = company.email;
        this.domain = company.domain;
    }
}
export{Company}