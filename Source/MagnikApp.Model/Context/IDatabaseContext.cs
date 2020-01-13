using MagnikApp.Model.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Text;

namespace MagnikApp.Model.Context
{
    public interface IDatabaseContext : IDisposable
    {
        DbSet<Account> Accounts { get; set; }

        DbSet<BreedOfPetType> BreedOfPetTypes { get; set; }

        DbSet<Comment> Comments { get; set; }

        DbSet<Order> Orders { get; set; }

        DbSet<Pet> Pets { get; set; }

        DbSet<PetService> PetServices { get; set; }

        DbSet<PetType> PetTypes { get; set; }

        EntityEntry Entry(object item);

        int SaveChanges();
    }
}
