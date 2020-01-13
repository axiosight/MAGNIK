using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class PetType
    {
        public Guid ID { get; set; }

        public string PetTypeName { get; set; }

        [ForeignKey("PetId")]
        public Guid PetId { get; set; }
        public virtual Pet Pet { get; set; }

        public virtual ICollection<BreedOfPetType> BreedOfPetTypes { get; set; }
    }
}
