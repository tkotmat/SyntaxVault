using BackendApiSyntaxVault.Models;

namespace BackendApiSyntaxVault.TemporaryModelStorage
{
    public class StorageUserAndToken
    {
        public UserModels? user { get; set; }
        public string token { get; set; } = string.Empty;
    }
}
