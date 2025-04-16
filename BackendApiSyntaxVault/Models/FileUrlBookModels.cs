namespace BackendApiSyntaxVault.Models
{
    public class FileUrlBookModels
    {
        public int id { get; set; }
        public string fileName { get; set; } = string.Empty;
        public string filePath { get; set; } = string.Empty;
        public string fileType { get; set; } = string.Empty;
    }
}
