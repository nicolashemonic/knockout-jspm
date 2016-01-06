using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutJspm.Controllers
{
    public class ComponentsController : Controller
    {
        // GET: Components
        public ActionResult Load(string name)
        {
            return View(name);
        }
    }
}