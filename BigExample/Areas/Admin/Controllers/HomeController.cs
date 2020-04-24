using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EntityFW.EF6;

namespace BigExample.Areas.Admin.Controllers
{
    

    public class HomeController : Controller
    {

        BigExampleDbContext bigExampleDb = new BigExampleDbContext();
        // GET: Admin/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddOT()
        {

            return View();
        }
        public ActionResult dsNhanVien()
        {
            return View(bigExampleDb.Employees.ToList());
        }
        public PartialViewResult Menu()
        {
            return PartialView(bigExampleDb.menus.ToList());
        }
        public PartialViewResult getRoles()
        {
            return PartialView(bigExampleDb.Roles.ToList());
        }
        public PartialViewResult getInforEmp()
        {
            return PartialView(bigExampleDb.Employees.ToList());
        }
        public PartialViewResult InforEmp()
        {
            return PartialView(bigExampleDb.Employees.ToList());
        }

    }
}