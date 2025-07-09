using Microsoft.AspNetCore.Mvc;

namespace WebApi.DI.MC.WebApi.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("{username}")]
    public IActionResult Notify(string username, [FromBody] string message)
    {
        _userService.NotifyUser(username, message);
        return Ok("Notification sent");
    }
}