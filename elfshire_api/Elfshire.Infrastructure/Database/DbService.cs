using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Elfshire.Infrastructure.Database
{
    public abstract class DbServiceBase<T> : IDbService where T : DbContext, new()
    {
        protected T DbContext { get; set; }

        //public IMessagingService MessagingService { get; set; }

        /// <inheritdoc />
        public bool CanSaveChanges()
        {
            try
            {
                return DbContext.ChangeTracker.HasChanges();
            }
            catch (SqlException sex)
            {
                ReportValidationErrors(sex);
                return false;
            }
            catch (Exception)
            {
                //MessagingService.PostMessage(MessageType.Error, e.Message);
                return false;
            }
        }

        /// <summary>
        /// Reports validation errors encountered during a database operation.
        /// </summary>
        /// <remarks>This method processes the errors contained in the provided <see
        /// cref="System.Data.SqlClient.SqlException"/>  and formats them into a detailed message. Each error is listed
        /// with its error number and message.</remarks>
        /// <param name="sex">The <see cref="System.Data.SqlClient.SqlException"/> containing the validation errors to report.</param>
        private void ReportValidationErrors(SqlException sex) // Fully qualify the SqlException type
        {
            var message = new StringBuilder();
            message.AppendLine("The following validation errors were encountered while saving:");

            foreach (SqlError error in sex.Errors) // Fully qualify the SqlError type
            {
                message.AppendLine("   Error:" + error.Number + " - " + error.Message);
            }
            //MessagingService.PostMessage(MessageType.Error, message.ToString());
        }


        /// <inheritdoc />
        public void SaveChanges()
        {
            DbContext.SaveChanges();
        }

        /// <inheritdoc />
        public void SetState<TEntity>(TEntity entity, EntityState entityState) where TEntity : Entity
        {
            DbContext.Entry(entity).State = entityState;
        }

        ///// <inheritdoc />
        //public DbSet<TEntity> GetDbSet<TEntity>() where TEntity : Entity
        //{
        //    DbSet<TEntity> collection = null;
        //    DbContext.GetType().GetProperties().ToList().ForEach(propertyInfo =>
        //    {
        //        if (typeof(DbSet<TEntity>).IsAssignableFrom(propertyInfo.PropertyType))
        //        {
        //            MethodInfo methodInfo = propertyInfo.GetGetMethod();

        //            collection =  (DbSet<TEntity>)methodInfo.Invoke(DbContext, null);
        //        }
        //    });
        //    return collection;

        //}

        /// <inheritdoc />
        public DbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return DbContext.Set<TEntity>();
        }

        /// <inheritdoc />
        public void Refresh(Entity entity)
        {
            if (entity == null || entity.Id == 0)
                return;
            DbContext.Entry(entity).Reload();
        }

        /// <inheritdoc />
        public void Refresh()
        {
            IEnumerable<EntityEntry> dbEntityEntries = DbContext.ChangeTracker.Entries();
            foreach (EntityEntry dbEntityEntry in dbEntityEntries)
            {
                dbEntityEntry.Reload();
            }
        }

        //public DbEntityEntry<T> Entry<T>(T entity) where T : Entity
        //{
        //    return DbContext.Entry(entity);
        //}

        /// <inheritdoc />
        public void ResetContext()
        {
            DbContext = new T();
        }

        /// <inheritdoc />
        public void Remove<TEntity>(TEntity entity) where TEntity : Entity
        {
            DbContext.Set<TEntity>().Remove(entity);
        }
    }
}