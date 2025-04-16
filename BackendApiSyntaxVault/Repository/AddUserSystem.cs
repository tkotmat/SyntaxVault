using BackendApiSyntaxVault.ContextDB;
using BackendApiSyntaxVault.Models;
using BackendApiSyntaxVault.Repository.Interface;
using BackendApiSyntaxVault.TemporaryModelStorage;
using Microsoft.EntityFrameworkCore;

namespace BackendApiSyntaxVault.Repository
{
    public class AddUserSystem : IAddUserSystem
    {
        public readonly ApiAppContextDB contextDB; 
        public readonly IJwtTokenGenerator jwtTokenGenerator;
        public AddUserSystem(ApiAppContextDB contextDB, IJwtTokenGenerator jwtTokenGenerator)
        {
            this.contextDB = contextDB;
            this.jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<StorageUserAndToken> AddUser(UserModels user)
        {
            try
            {
                var existingUser = await contextDB.user
                    .FirstOrDefaultAsync(u => u.username == user.username || u.email == user.email);

                if (existingUser != null)
                {
                    return null;
                }

                user.id = await GetNextAvailableUserId(contextDB);
                string token = jwtTokenGenerator.GenerateToken();

                contextDB.user.Add(user);
                await contextDB.SaveChangesAsync();

                return new StorageUserAndToken
                {
                    user = user,
                    token = token
                };
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ошибка внутри AddUser:");
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        // 🔧 Метод для пошуку наступного вільного ID
        private async Task<int> GetNextAvailableUserId(ApiAppContextDB contextDB)
        {
            int newId = 1;

            var existingIds = await contextDB.user
                .Select(u => u.id)
                .OrderBy(id => id)
                .ToListAsync();


            foreach (var id in existingIds)
            {
                if (id == newId)
                    newId++;
                else
                    break;
            }

            return newId;
        }
    }
}
