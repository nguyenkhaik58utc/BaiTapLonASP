﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EntityFW.EF6;
using BigExample.Areas.Admin.Model;

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
        [HttpGet]
        /*public JsonResult deleteEmp(int id)
        {

        }*/

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
        public PartialViewResult addEmployee()
        {
            return PartialView();
        }
        public PartialViewResult InforEmp()
        {
            return PartialView(bigExampleDb.Employees.ToList());
        }
        [HttpGet]
        public JsonResult getEmpForUpdate(int employeeId)
        {
            try
            {
                if (employeeId > 0)
                {

                    var selectEmp = bigExampleDb.Employees.Where(s => s.Employee_ID == employeeId).FirstOrDefault<Employee>();
                    // đối tượng trả về
                    EmployeeModel employee = new EmployeeModel
                    {
                        Employee_ID = selectEmp.Employee_ID,
                        Employee_Name = selectEmp.Employee_Name,
                        Images = selectEmp.Images,
                        User_emp = selectEmp.User_emp,
                        Department = selectEmp.Department,
                        Date_Of_Birth = selectEmp.Date_Of_Birth,
                        Sex = selectEmp.Sex,
                        Address_emp = selectEmp.Address_emp,
                        Email_Address = selectEmp.Email_Address,
                        Phone_Number = selectEmp.Phone_Number,
                    };
                    return Json(new
                    {
                        Employee_ID = selectEmp.Employee_ID,
                        Employee_Name = selectEmp.Employee_Name,
                        Images = selectEmp.Images,
                        User_emp = selectEmp.User_emp,
                        Department = selectEmp.Department,
                        Date_Of_Birth = selectEmp.Date_Of_Birth,
                        Sex = selectEmp.Sex,
                        Address_emp = selectEmp.Address_emp,
                        Email_Address = selectEmp.Email_Address,
                        Phone_Number = selectEmp.Phone_Number
                    }, JsonRequestBehavior.AllowGet);
                }
            }
            catch
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public Boolean updateEmployee(int employeeID, string employeeName, string userEmp, string images, string department,
            DateTime dateOfBirth, string sex, string addressEmp, string emailAddress, string phoneNumber, int optionRoles)
        {
            
            var result = bigExampleDb.Employees.Where(s => s.Employee_ID == employeeID).FirstOrDefault<Employee>();
           
            if (result != null)
            {
                var account = bigExampleDb.Accounts.Where(a => a.User_emp == result.User_emp);

                result.Employee_Name = employeeName;
                result.User_emp = userEmp;
                result.Images = images;
                result.Department = department;
                result.Date_Of_Birth = dateOfBirth;
                result.Sex = sex;
                result.Address_emp = addressEmp;
                result.Email_Address = emailAddress;
                result.Phone_Number = phoneNumber;
                return true;
            }
            else
                return false;
        }

        [HttpPost]
        public Boolean deleteEmployee(int employeeId)
        {

            var itemToRemove = bigExampleDb.Employees.SingleOrDefault(x => x.Employee_ID == employeeId); //returns a single item.

            if (itemToRemove != null)
            {
                itemToRemove.Delete_flag = 0;
                bigExampleDb.SaveChanges();
                return true;
            }
            else return false;
        }


    }
}