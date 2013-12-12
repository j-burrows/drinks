using System.Collections;
using System.Web;
using System.Web.Mvc;
using Drinks.Models;
using DrinksLib.Business;
using DrinksLib.Data.Entities;

namespace Drinks.Controllers{
    [Authorize]
    public class HomeController : Controller{
        public ActionResult Index(){
            return View(HomeIndexViewModel.ForUserPage(User.Identity.Name, "~/"));
        }

        [HttpPost]
        public ActionResult Avatar_Create(DAvatar creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Avatar_Update(DAvatar updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Avatar_Delete(DAvatar deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult DefinedInstruction_Create(DDefined_Instruction creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult DefinedInstruction_Update(DDefined_Instruction updating){
            return View("Index");
        }

        [HttpPost]
        public ActionResult DefinedInstruction_Delete(DDefined_Instruction deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Drink_Create(DDrink creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Drink_Update(DDrink updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Drink_Delete(DDrink deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Ingredient_Create(DIngredient creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Ingredient_Update(DIngredient updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Ingredient_Delete(DIngredient deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Instruction_Create(DInstruction creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Instruction_Update(DInstruction updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Instruction_Delete(DInstruction deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Rating_Create(DRating creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Rating_Update(DRating updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Rating_Delete(DRating deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Unit_Create(DUnit creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Unit_Update(DUnit updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Unit_Delete(DUnit deleting) {
            return View("Index");
        }
    }
}
