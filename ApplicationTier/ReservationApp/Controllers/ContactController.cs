using ReservationApp.Models;
using ReservationApp.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IRepository _repository;

        public ContactController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> ContactList()
        {
            return await _repository.SelectAll<Contact>();            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var model = await _repository.SelectById<Contact>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(long id, Contact c)
        {
            if (id != c.Id)
            {
                return BadRequest();
            }

            //await _repository.UpdateAsync<Contact>(c);
            await _repository.UpdateContactAsync(c);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> CreateContact([FromBody] Contact c)
        {
            //await _repository.CreateAsync<Contact>(c);
            await _repository.CreateContactAsync(c);
            return CreatedAtAction("GetContact", new { id = c.Id }, c);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(int id)
        {
            var c = await _repository.SelectById<Contact>(id);

            if (c == null)
            {
                return NotFound();
            }

            await _repository.DeleteContact(c.Id);

            return c;
        }
    }
}