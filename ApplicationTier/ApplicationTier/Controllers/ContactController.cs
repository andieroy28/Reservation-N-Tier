using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApplicationTier.Models;

namespace ApplicationTier.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ApiContext _context;

        public ContactController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContact()
        {
            return await _context.Contact.FromSqlRaw($"spGetReservations").ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var contact = await _context.Contact.FromSqlInterpolated($"spGetContact {id}").ToListAsync();
            if (contact == null)
            {
                return NotFound();
            }
            return contact.FirstOrDefault();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact(int id, Contact c)
        {
            if (id != c.Id)
            {
                return BadRequest();
            }

            try
            {
                await _context.Database.ExecuteSqlRawAsync($"spAddContact {c.Id}, {c.Name}, {c.PhoneNumber}, {c.BirthDate}, {c.ReservationId}, {c.Description}");
            
            }
            catch 
            {
                throw;
            }

            return CreatedAtAction("GetContact", new { id = c.Id }, c);
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact c)
        {
            await _context.Database.ExecuteSqlRawAsync($"spAddContact {c.Name}, {c.PhoneNumber}, {c.BirthDate}, {c.ReservationId}, {c.Description}");

            return CreatedAtAction("GetContact", new { id = c.Id }, c);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
           await _context.Database.ExecuteSqlRawAsync($"spDeleteContact {id}");
            return NoContent();
        }

        private bool ContactExists(int id)
        {
            return _context.Contact.Any(e => e.Id == id);
        }
    }
}
