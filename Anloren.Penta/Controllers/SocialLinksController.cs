using Anloren.Penta.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Anloren.Penta.Controllers
{
    [ApiController]
    [Route("social-links")]
    public class SocialLinksController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SocialLink>>> GetSocialLinks()
        {
            var socialLinks = new[]
            {
                new SocialLink { Id=3, Title = "Loren", Url = "http://www.umbeon.com" },
                new SocialLink { Id=4, Title = "Antoio", Url = "http://www.umbeon.com" },
                new SocialLink { Id=5, Title = "Test", Url = "http://www.umbeon.com" },
            };

            return socialLinks;
        }
    }
}
