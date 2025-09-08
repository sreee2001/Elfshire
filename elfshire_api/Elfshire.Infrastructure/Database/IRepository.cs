using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Elfshire.Infrastructure.Database
{
    public interface IRepository<T> where T : Entity, new()
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);

        IQueryable<T> GetAll();
        T GetById(int id);
        void Add(IEnumerable<T> models);
        void Add(T model);
        void Update(IEnumerable<T> models);
        void Update(T model);
        void Delete(T model);
        void Delete(IEnumerable<T> models);
        void MarkAsDelete(T model);
        void MarkAsDelete(IEnumerable<T> models);
        void ClearDirtyFlag(T model);
        void ClearDirtyFlag(IEnumerable<T> models);
        void Refresh(int id);
        void ResetContext();
    }
}