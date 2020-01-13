using MagnikApp.DataProvider.Interfaces;
using MagnikApp.Logic.Interfaces;
using MagnikApp.Model.Context.CommitProvider;
using MagnikApp.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace MagnikApp.Logic.Services
{
    public class AccountService  : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly ICommitProvider _commitProvider;
        private readonly UserManager<Account> _userManager;

        public AccountService(IAccountRepository accountRepository, ICommitProvider commitProvider, UserManager<Account> userManager)
        {
            _accountRepository = accountRepository;
            _commitProvider = commitProvider;
            _userManager = userManager;
        }
    }
}