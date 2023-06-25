using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Models;

    public class BookContext : IdentityDbContext<LocalUser>
    {
        public BookContext(DbContextOptions options)
            : base(options)
            {
            }
            public DbSet<Book> Books { get; set; } = null!;
    }
