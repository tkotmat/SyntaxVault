using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BackendApiSyntaxVault.ContextDB;
using BackendApiSyntaxVault.Models;

namespace BackendApiSyntaxVault.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly ApiAppContextDB _context;

        public UserApiController(ApiAppContextDB context)
        {
            _context = context;
        }

        // GET: api/UserApi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModels>>> GetUsers()
        {
            return await _context.user.ToListAsync();
        }

        // POST: api/UserApi
        [HttpPost]
        public async Task<ActionResult<UserModels>> CreateUser([FromBody] UserModels user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.user.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsers), new { id = user.id }, user);
        }
    }
}
