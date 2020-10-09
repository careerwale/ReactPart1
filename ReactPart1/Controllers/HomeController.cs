using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactPart1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getmessage()
        {
            return new JsonResult { Data = "Hello World. I am from server-side from controller", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public ActionResult IndexNew()
        {
            return View();
        }

        public JsonResult GetMessageNew()
        {
            return Json(new { Data = "Hello World. I am from  server-side from controller" }, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = "Hello World. I am from controller", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}