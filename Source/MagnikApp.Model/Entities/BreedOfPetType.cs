using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MagnikApp.Model.Entities
{
    public class BreedOfPetType
    {
        public Guid ID { get; set; }

        public string BreedName { get; set; }

        [ForeignKey("PetTypeId")]
        public Guid PetTypeId { get; set; }

        public virtual PetType PetType { get; set; }
    }
}