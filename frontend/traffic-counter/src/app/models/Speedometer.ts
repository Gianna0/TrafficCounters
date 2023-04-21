export class Speedometer {
    id: number;
    name: string;
    limitSpeed: number;
    location: string;
    country: string;
    city: string;
    street: string;
    deleted: boolean;
    constructor(id:number, name: string, limitSpeed: number, location: string, country: string, city: string, street: string, deleted: boolean) {
        this.id = id;
        this.name = name;
        this.limitSpeed = limitSpeed;
        this.location = location;
        this.country = country;
        this.city = city;
        this.street = street;
        this.deleted = deleted;
    }
}
