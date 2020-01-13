using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class Pet
    {
        public Guid ID { get; set; }

        public string PetImage { get; set; }

        public string PetName { get; set; }

        public string PetAge { get; set; }

        public string PetWeight { get; set; }

        public string PetDescription { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }

        public virtual PetType PetType { get; set; }
    }
}
