using System.Collections.Generic;
using Elfshire.Infrastructure.Models;

namespace Elfshire.Infrastructure.Services
{
    public class FinancialService : IFinancialService
    {
        public IEnumerable<FinancialRecord> GetFinancialData()
        {
            return new List<FinancialRecord>
            {
                new FinancialRecord { Id = 1, Name = "Revenue", Value = 100000 },
                new FinancialRecord { Id = 2, Name = "Expenses", Value = 50000 }
            };
        }
    }
}