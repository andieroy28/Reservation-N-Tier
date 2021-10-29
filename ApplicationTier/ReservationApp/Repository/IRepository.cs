using ReservationApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationApp.Repository
{
    public interface IRepository
    {       
        
        Task CreateAsync<T>(T entity) where T : class;
        
        Task DeleteAsync<T>(T entity) where T : class;

        Task<List<T>> SelectAll<T>() where T : class;

        Task<T> SelectById<T>(long id) where T : class;

        Task UpdateAsync<T>(T entity) where T : class;

        Task UpdateContactAsync(Contact c);

        Task<int> CreateContactAsync(Contact c);

        Task DeleteContact(long id);
    }
}