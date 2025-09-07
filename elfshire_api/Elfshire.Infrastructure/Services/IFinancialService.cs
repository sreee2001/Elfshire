using System.Collections.Generic;
using Elfshire.Infrastructure.Models;

namespace Elfshire.Infrastructure.Services
{
    public interface IFinancialService
    {
        IEnumerable<FinancialRecord> GetFinancialData();
    }
}