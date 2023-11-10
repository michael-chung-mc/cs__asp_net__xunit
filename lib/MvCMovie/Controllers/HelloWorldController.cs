using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers;

public class HelloWorldController : Controller {
    public string Index() {
        return "default";
    }
    public IActionResult GetView() {
        return View();
    }
    public string Welcome() {
        return "welcome";
    }
    public string Params(string name, int numTimes = 1) {
        return HtmlEncoder.Default.Encode($"Hello {name}, NumTimes is: {numTimes}");
    }
    public string ParamID(string name, int ID = 1) {
        return HtmlEncoder.Default.Encode($"Hello {name}, ID is: {ID}");
    }
    public IActionResult ParamView(string name, int numTimes = 1) {
        ViewData["Message"] = "Hello" + name;
        ViewData["NumTimes"] = numTimes;
        return View();
    }
}