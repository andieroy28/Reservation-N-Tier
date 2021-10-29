using System;

namespace ApplicationTier.Models
{
    public class Contact
    {
        public Contact()
        {
            Id = 0; // Set the initial value for ID
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int ReservationId { get; set; }

        public string PhoneNumber { get; set; }

        public DateTime BirthDate { get; set; }

        public string Description { get; set; }
    }
}
