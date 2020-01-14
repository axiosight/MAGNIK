using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class Order
    {
        public Guid ID { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }

        public Guid ServiceId { get; set; }

        public DateTime StartDateTime { get; set; }

        public DateTime NowDateTime { get; set; }

        public virtual ICollection<PetService> PetServices { get; set; }
    }
}