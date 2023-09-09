using Microsoft.AspNetCore.Mvc;

namespace Middleware.Controllers;

[ApiController]
[Route("[controller]")]
public class RepositoryController : ControllerBase
{
    [HttpPost( "getRepository")]
    public IActionResult GetRepository([FromBody] string url)
    {
        return Ok();
    }
    
}