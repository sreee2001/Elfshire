using Elfshire.Infrastructure.Database;

namespace Elfshire.Infrastructure.Models
{
    public class FinancialRecord : Entity
    {
        public string Name { get; set; }
        public decimal Value { get; set; }
    }
}