using MagnikApp.DataProvider.Interfaces;
using MagnikApp.Model.Context;
using MagnikApp.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace MagnikApp.DataProvider.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly IDatabaseContext _databaseContext;
        private readonly UserManager<Account> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<Account> _signInManager;

        public AccountRepository(IDatabaseContext databaseContext, UserManager<Account> userManager, RoleManager<IdentityRole> roleManager, SignInManager<Account> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _databaseContext = databaseContext;
        }


    }
}