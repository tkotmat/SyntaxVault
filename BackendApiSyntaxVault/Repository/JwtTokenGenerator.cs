using BackendApiSyntaxVault.Repository.Interface;
using System.Text;

namespace BackendApiSyntaxVault.Repository
{
    public class JwtTokenGenerator : IJwtTokenGenerator
    {
        private static readonly Random random = new();

        public string GenerateToken()
        {
            string part1 = GenerateRandomLetters(3);
            string part2 = GenerateRandomLetters(4);
            string part3 = GenerateRandomLetters(3);
            string part4 = GenerateRandomLetters(4);

            return $"{part1}_{part2}_{part3}_{part4}";
        }

        private string GenerateRandomLetters(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var result = new StringBuilder(length);
            for (int i = 0; i < length; i++)
            {
                result.Append(chars[random.Next(chars.Length)]);
            }
            return result.ToString();
        }
    }
}
