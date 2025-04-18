using BackendApiSyntaxVault.Models;
using BackendApiSyntaxVault.Repository;
using BackendApiSyntaxVault.Repository.Interface;
using BackendApiSyntaxVault.TemporaryModelStorage;
using Microsoft.AspNetCore.Mvc;

namespace BackendApiSyntaxVault.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IAddUserSystem addUserSystem;
        private readonly IUserIdentification userIdentification;

        public UserApiController(IAddUserSystem addUserSystem, IUserIdentification userIdentification)
        {
            this.addUserSystem = addUserSystem;
            this.userIdentification = userIdentification;
        }

        [HttpPost("registri")]
        public async Task<IActionResult> AddUserDatabase([FromBody] UserModels user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var resultUserAndToken = await addUserSystem.AddUser(user);
                if (resultUserAndToken == null)
                    return Conflict("User with the same login or email already exists.");

                return Ok(resultUserAndToken);
            }
            catch (Exception ex)
            {
                Console.WriteLine("❌ Ошибка контроллера при регистрации:");
                Console.WriteLine(ex.ToString());
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] UserModels userModel)
        {
            if (userModel == null || string.IsNullOrEmpty(userModel.email) || string.IsNullOrEmpty(userModel.password))
            {
                return BadRequest("Email and password are required.");
            }

            var user = await userIdentification.CheckEmailFromDatabase<UserModels>(userModel.email);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            if (user.password != userModel.password)
            {
                return Unauthorized("Invalid email or password.");
            }

            string token = userIdentification.GetToken();

            var storageUserAndToken = new StorageUserAndToken
            {
                user = user,
                token = token,
            };

            return Ok(storageUserAndToken);
        }
    }
}
