namespace BackendApiSyntaxVault.Models
{
    public class UserModels
    {
        public int id { get; set; }
        public string username { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        public bool isAdmin { get; set; } = false;
    }
}
