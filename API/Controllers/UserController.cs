using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<LocalUser> _userManager;
        public UserController (UserManager<LocalUser> userManager) {
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
                    Token = "token tbc",
                    Username = user.UserName
                };
            }
            return Unauthorized();
        }
        
    }
}