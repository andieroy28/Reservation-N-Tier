using Microsoft.EntityFrameworkCore;

namespace ApplicationTier.Models
{
    public partial class ApiContext : DbContext
    {
        public ApiContext()
        {
        }

        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> Contact { get; set; }
    }
}