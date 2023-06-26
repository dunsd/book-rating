using System.Security.Claims;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO) {
            var user = await _userManager.FindByEmailAsync(loginDTO.Email);

            if(user == null) {
                return Unauthorized();
            }

            var result = await _userManager.CheckPasswordAsync(user, loginDTO.Password);

            if(result) {
                return CreateUserObject(user);
            }
            return Unauthorized();
        }
        
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO) {
            if(await _userManager.Users.AnyAsync(x => x.UserName == registerDTO.Username)) {
                return BadRequest("Username is taken");
            }
            if(await _userManager.Users.AnyAsync(x => x.Email == registerDTO.Email)) {
                return BadRequest("Email is taken");
            }
            var user = new LocalUser {
                DisplayName = registerDTO.DisplayName,
                Email = registerDTO.Email,
                UserName = registerDTO.Username,
            };

            var result = await _userManager.CreateAsync(user, registerDTO.Password);

            if(result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return BadRequest("Problem when creating new user");
        }

        
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser() {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserObject(user);

        }
        private ActionResult<UserDTO> CreateUserObject(LocalUser user)
        {
            return new UserDTO
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.CreateToken(user),
                Username = user.UserName
            };
        }
    }
}