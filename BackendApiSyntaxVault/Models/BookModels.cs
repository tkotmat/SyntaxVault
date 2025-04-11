namespace BackendApiSyntaxVault.Models
{
    public class BookModels
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;

        public string Genre { get; set; } = string.Empty;

        public string Author { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public string PdfUrl { get; set; } = string.Empty;

    }
}
