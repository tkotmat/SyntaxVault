namespace BackendApiSyntaxVault.Models
{
    public class CommentModels
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public BookModels? Book { get; set; }
        public int UserId { get; set; }
        public UserModels? User { get; set; }
        public string Text { get; set; } = string.Empty;
    }
}
