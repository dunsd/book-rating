using API.Models;
using API.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<LocalUser> _userManager;
        private readonly TokenService _tokenService;
        public UserController (UserManager<LocalUser> userManager, TokenService tokenService) {
            _tokenService = tokenService;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO) {
            var user = await _userManager.FindByEmailAsync(loginDTO.Email);

            if(user == null) {
                return Unauthorized();
            }

            var result = await _userManager.CheckPasswordAsync(user, loginDTO.Password);

            if(result) {
                return new UserDTO {
                    DisplayName = user.DisplayName,
                    Image = null,
                    Token = _tokenService.CreateToken(user),
                    Username = user.UserName
                };
            }
            return Unauthorized();
        }
        
    }
}