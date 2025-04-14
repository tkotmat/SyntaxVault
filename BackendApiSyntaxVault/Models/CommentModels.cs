namespace BackendApiSyntaxVault.Models
{
    public class CommentModels
    {
        public int id { get; set; }
        public int bookId { get; set; }
        public BookModels? book { get; set; }
        public int userId { get; set; }
        public UserModels? user { get; set; }
        public string text { get; set; } = string.Empty;
    }
}
