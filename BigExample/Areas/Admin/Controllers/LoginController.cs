using BigExample.Areas.Admin.Model;
using BigExample.Code;
using EntityFW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace BigExample.Areas.Admin.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        // GET: Admin/Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(LoginModel model)
        {
            var result = new AccountModel().Login(model.UserName, model.PassWord);
            if(result && ModelState.IsValid)
            {
                SessionHelper.SetSession(new UserSession() { UserName = model.UserName });
                return RedirectToAction("Index", "Home");
            }
                else
                {
                    ModelState.AddModelError("", "Tên đăng nhập hoặc mật khẩu không đúng,");
                }
            return View(model);
        }
    }
}