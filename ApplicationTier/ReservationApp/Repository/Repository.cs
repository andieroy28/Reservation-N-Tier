using ReservationApp.Models;
using ReservationApp.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using System.Data;

namespace ReservationApp.Repository
{
    public class Repository<TDbContext> : IRepository where TDbContext : DbContext
    {
        protected TDbContext dbContext;

        public Repository(TDbContext context)
        {
            dbContext = context;
        }

        public async Task CreateAsync<T>(T entity) where T : class
        {
            this.dbContext.Set<T>().Add(entity);

            _ = await this.dbContext.SaveChangesAsync();
        }


        public async Task DeleteAsync<T>(T entity) where T : class
        {
            this.dbContext.Set<T>().Remove(entity);

            _ = await this.dbContext.SaveChangesAsync();
        }

        public async Task<List<T>> SelectAll<T>() where T : class
        {
            return await this.dbContext.Set<T>().FromSqlRaw($"spGetReservations").ToListAsync();
        }

        public async Task<T> SelectById<T>(long id) where T : class
        {
            var c = await this.dbContext.Set<T>().FromSqlInterpolated($"spGetContact {id}").ToListAsync();

            return c.FirstOrDefault();
        }

        public async Task UpdateAsync<T>(T entity) where T : class
        {
            this.dbContext.Set<T>().Update(entity);

            _ = await this.dbContext.SaveChangesAsync();

            
        }

        public async Task UpdateContactAsync(Contact c)
        {
            _ = await this.dbContext.Set<Contact>().FromSqlRaw($"spUpdateContact {c.Id}, {c.Name}, {c.PhoneNumber}, {c.BirthDate}, {c.ReservationId}, {c.ContactTypeId}, {c.Description}").ToListAsync();

        }
        public async Task<int> CreateContactAsync(Contact c)
        {
            var parameter = new List<SqlParameter>();
            parameter.Add(new SqlParameter("@Name", c.Name));
            parameter.Add(new SqlParameter("@PhoneNumber", c.PhoneNumber));
            parameter.Add(new SqlParameter("@BirthDate", c.BirthDate));
            parameter.Add(new SqlParameter("@ReservationId", c.ReservationId));
            parameter.Add(new SqlParameter("@ContactTypeId", c.ContactTypeId));
            
            parameter.Add(new SqlParameter("@Description", c.Description));
            parameter.Add(new SqlParameter
            {
                ParameterName = "@Id",
                DbType = DbType.Int32,
                Direction = ParameterDirection.Output
            });



            var result = await Task.Run(() => dbContext.Set<Contact>().FromSqlRaw(@"exec spAddContact 
                @Name,
                @PhoneNumber,
                @BirthDate,
                @ReservationId,
                @Description,
                @ContactTypeId
                @Id OUT",
                    parameter.ToArray()
             ));

            int returnVal = int.Parse(parameter[6].Value.ToString());
            return returnVal;

            // return await this.dbContext.Database.ExecuteSqlRawAsync($"spAddContact {c.Name}, {c.PhoneNumber}, {c.BirthDate}, {c.ReservationId}, {c.Description}");
        }

        public async Task DeleteContact(long id)
        {
            _ = await this.dbContext.Database.ExecuteSqlRawAsync($"spDeleteContact {id}");
        }

    }
}