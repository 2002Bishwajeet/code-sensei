using Microsoft.AspNetCore.Mvc;

namespace Middleware.Controllers;

[ApiController]
[Route("[controller]")]
public class QueryController : ControllerBase
{
    [HttpPost( "PostQuery")]
    public IActionResult PostQuery([FromBody] string query)
    {
        return Ok();
    }
    
}