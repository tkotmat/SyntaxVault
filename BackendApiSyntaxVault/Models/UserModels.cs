using System.ComponentModel.DataAnnotations;

namespace BackendApiSyntaxVault.Models
{
    public class UserModels
    {
        public int id { get; set; }

        [RegularExpression("^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]*$",
            ErrorMessage = "Username can only contain English letters, numbers, and special characters.")]
        public string username { get; set; } = string.Empty;

        [EmailAddress(ErrorMessage = "Invalid email format.")]
        [RegularExpression("^[a-zA-Z0-9@._\\-+]*$",
            ErrorMessage = "Email can only contain English letters, numbers, and email-related characters.")]
        public string email { get; set; } = string.Empty;

        [RegularExpression("^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]*$",
            ErrorMessage = "Password can only contain English letters, numbers, and special characters.")]
        public string password { get; set; } = string.Empty;

        public bool isAdmin { get; set; } = false;
    }
}
