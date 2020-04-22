using EntityFW.EF6;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFW
{
    public class AccountModel
    {

        private BigExampleDbContext bigExample;

        public AccountModel()
        {
            bigExample = new BigExampleDbContext();
        }
        public bool Login(string user, string password)
        {
            object[] sqlParams = new SqlParameter[]
            {
                new SqlParameter("@UserName",user),new SqlParameter("@PassWord",password)
            };
            var res = bigExample.Database.SqlQuery<bool>(" Account_Login @UserName,@PassWord",
                sqlParams).SingleOrDefault();
            return res;
        }
    }
}
