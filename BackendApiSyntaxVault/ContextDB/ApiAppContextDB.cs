using BackendApiSyntaxVault.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApiSyntaxVault.ContextDB
{
    public class ApiAppContextDB : DbContext
    {
        public DbSet<UserModels> user { get; set; }
        public DbSet<BookModels> book { get; set; }
        public DbSet<FileUrlBookModels> file { get; set; }
        public DbSet<CommentModels> Comment { get; set; }


        public ApiAppContextDB(DbContextOptions<ApiAppContextDB> options) : base(options) { }
    }
}
