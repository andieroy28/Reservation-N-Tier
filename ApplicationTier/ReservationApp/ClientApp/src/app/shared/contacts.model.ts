export class Contacts {
  id: number;
  reservationId: number;
  name: string;
  phoneNumber: string;
  birthDate: Date;
  description: string;


  constructor() {
    this.id = 0;
    this.reservationId = 0;
    this.name = "";
    this.phoneNumber = "";
    this.birthDate = new Date();
    this.description = "";
  }

}
