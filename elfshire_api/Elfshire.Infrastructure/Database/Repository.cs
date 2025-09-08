using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Elfshire.Infrastructure.Database
{
    public abstract class Repository<T> : IRepository<T> where T : Entity, new()
    {
        protected IDbService DbService { get; }

        private DbSet<T> ModelDbSet => DbService.Set<T>();

        protected Action PostSaveAction = () => { };
        protected Action PostSaveAllAction = () => { };

        public void Add(IEnumerable<T> models)
        {
            throw new System.NotImplementedException();
        }

        public void Add(T model)
        {
            throw new System.NotImplementedException();
        }

        public Task AddAsync(T entity)
        {
            throw new System.NotImplementedException();
        }

        public void ClearDirtyFlag(T model)
        {
            throw new System.NotImplementedException();
        }

        public void ClearDirtyFlag(IEnumerable<T> models)
        {
            throw new System.NotImplementedException();
        }

        public void Delete(T model)
        {
            throw new System.NotImplementedException();
        }

        public void Delete(IEnumerable<T> models)
        {
            throw new System.NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public IQueryable<T> GetAll()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<T>> GetAllAsync()
        {
            throw new System.NotImplementedException();
        }

        public T GetById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<T> GetByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public void MarkAsDelete(T model)
        {
            throw new System.NotImplementedException();
        }

        public void MarkAsDelete(IEnumerable<T> models)
        {
            throw new System.NotImplementedException();
        }

        public void Refresh(int id)
        {
            throw new System.NotImplementedException();
        }

        public void ResetContext()
        {
            throw new System.NotImplementedException();
        }

        public void Update(IEnumerable<T> models)
        {
            throw new System.NotImplementedException();
        }

        public void Update(T model)
        {
            throw new System.NotImplementedException();
        }

        public Task UpdateAsync(T entity)
        {
            throw new System.NotImplementedException();
        }
    }
}