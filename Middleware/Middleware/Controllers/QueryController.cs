using Microsoft.AspNetCore.Mvc;

namespace Middleware.Controllers;

[ApiController]
[Route("[controller]")]
public class QueryController : ControllerBase
{
    [HttpGet( "PostQuery")]
    public IActionResult PostQuery(string query)
    {
        return Ok();
    }
    
}