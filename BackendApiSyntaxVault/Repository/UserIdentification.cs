using BackendApiSyntaxVault.ContextDB;
using BackendApiSyntaxVault.Models;
using BackendApiSyntaxVault.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace BackendApiSyntaxVault.Repository
{
    public class UserIdentification : IUserIdentification
    {
        public readonly ApiAppContextDB contextDB;
        public readonly IJwtTokenGenerator jwtTokenGenerator;
        public UserIdentification(ApiAppContextDB contextDB, IJwtTokenGenerator jwtTokenGenerator)
        {
            this.contextDB = contextDB;
            this.jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<T?> CheckEmailFromDatabase<T>(string email)
        {
            var result = await contextDB.user.FirstOrDefaultAsync(u => u.email == email);
            return result != null ? (T)Convert.ChangeType(result, typeof(T)) : default;
        }

        public string GetToken()
        {
            return jwtTokenGenerator.GenerateToken();
        }
    }

    public interface IUserIdentification
    {
        public Task<T?> CheckEmailFromDatabase<T>(string email);

        public string GetToken();
    }
}
