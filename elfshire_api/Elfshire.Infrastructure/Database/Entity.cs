using System;

namespace Elfshire.Infrastructure.Database
{
    public abstract class Entity
    {
        public int Id { get; set; }
        public bool IsDirty { get; set; }

        public string CreatedBy { get; set; }
        public DateTime? CreatedAt { get; set; }

        public string UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }

    }
}