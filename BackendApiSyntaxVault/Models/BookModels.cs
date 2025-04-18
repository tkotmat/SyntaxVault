namespace BackendApiSyntaxVault.Models
{
    public class BookModels
    {
        public Guid id { get; set; }
        public string title { get; set; } = string.Empty;

        public string genre { get; set; } = string.Empty;

        public string author { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;

        public string pdfUrl { get; set; } = string.Empty;

        public string FileType { get; set; } = string.Empty;
        public string FileBase64 { get; set; } = string.Empty;

    }
}
