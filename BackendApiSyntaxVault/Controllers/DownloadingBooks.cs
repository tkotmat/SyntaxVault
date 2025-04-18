using BackendApiSyntaxVault.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;

namespace BackendApiSyntaxVault.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DownloadingBooks : ControllerBase
    {


        [HttpGet("Books")]
        public async Task<IActionResult> GetAllBooks()
        {
            List<BookModels> books = new List<BookModels>();

            var json = JsonSerializer.Serialize(books);
            var bytes = Encoding.UTF8.GetBytes(json);
            return  File(bytes, "application/pdf", "books.pdf");
        }
    }
}
