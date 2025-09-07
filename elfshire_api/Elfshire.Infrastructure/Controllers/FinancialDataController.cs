using Elfshire.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Spring.Context.Support;

namespace Elfshire.Infrastructure.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FinancialDataController : ControllerBase
    {
        private readonly IFinancialService _financialService;

        public FinancialDataController()
        {
            // Retrieve the FinancialService bean from Spring.NET context
            var ctx = ContextRegistry.GetContext();
            _financialService = (IFinancialService)ctx.GetObject("financialService");
        }

        [HttpGet]
        public IActionResult GetFinancialData()
        {
            var data = _financialService.GetFinancialData();
            return Ok(data);
        }
    }
}