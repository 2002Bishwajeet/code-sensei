using Microsoft.AspNetCore.Mvc;

namespace Middleware.Controllers;

[ApiController]
[Route("[controller]")]
public class RepositoryController : ControllerBase
{
    [HttpGet( "getRepository")]
    public IActionResult GetRepository(string url)
    {
        return Ok();
    }
    
}