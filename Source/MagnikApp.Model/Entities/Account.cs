using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class Account : IdentityUser
    {
        public string AccountImage { get; set; }

        public string AccountName { get; set; }

        public string AccountSurname { get; set; }

        public string AccountStreet { get; set; }

        public string AccountDescription { get; set; }

        public virtual ICollection<Pet> Pets { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<PetService> PetServices { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
