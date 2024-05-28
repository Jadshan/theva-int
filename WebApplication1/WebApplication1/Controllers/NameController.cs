using Microsoft.AspNetCore.Mvc;

namespace NameApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class NameController : ControllerBase
	{
		[HttpGet("{name}")]
		public IActionResult GetNameResponse(string name)
		{
			return Ok($"I am {name}");
		}
	}
}
