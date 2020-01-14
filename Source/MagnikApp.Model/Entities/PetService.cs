using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class PetService
    {
        public Guid ID { get; set; }

        public string ServiceTitle { get; set; }

        public string ServiceDescription { get; set; }

        public string ServicePrice { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }

        [ForeignKey("OrderId")]
        public Guid OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
