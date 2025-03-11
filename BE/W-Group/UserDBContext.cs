using Microsoft.EntityFrameworkCore;
using W_Group.Models;

namespace W_Group
{
    public class UserDBContext : DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {

        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<User>()
        //        .HasMany(a => a.userUnits)
        //        .WithOne(b => b.userId)
        //        .HasForeignKey(b => b.userId)
        //        .OnDelete(DeleteBehavior.Cascade); // Enable cascade delete
        //}
        public DbSet<User> Users { get; set; }
        //public DbSet<unit> Units { get; set; }
        
    }
}
        
   

