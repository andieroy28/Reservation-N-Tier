using Microsoft.EntityFrameworkCore;

namespace ReservationApp.Models
{
    public class ApiContext : DbContext
    {
        private readonly DbContextOptions _options;
        public ApiContext(DbContextOptions options) : base(options)
        {
            _options = options;
        }

        public DbSet<Contact> contacts { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //}
    }
}