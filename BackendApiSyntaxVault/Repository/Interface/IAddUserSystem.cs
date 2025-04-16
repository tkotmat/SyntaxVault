using BackendApiSyntaxVault.ContextDB;
using BackendApiSyntaxVault.Models;
using BackendApiSyntaxVault.TemporaryModelStorage;

namespace BackendApiSyntaxVault.Repository.Interface
{
    public interface IAddUserSystem
    {
        public Task<StorageUserAndToken> AddUser(UserModels user);
    }
}
