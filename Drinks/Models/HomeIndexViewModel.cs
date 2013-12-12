using System.Collections.Generic;
using InfastructureLib;
using InfastructureLib.Data.Entities;
using DrinksLib;
using DrinksLib.Data.Entities;
namespace Drinks.Models{
    public class HomeIndexViewModel{
        public IEnumerable<IEnumerable<DPage>> navSection { get; set; }

        public HomeIndexViewModel() {}

        public static HomeIndexViewModel ForUserPage(string username, string Url){
            IInfastructureService infastructure = new InfastructureService();
            
            return new HomeIndexViewModel { 
                navSection = infastructure.PageStructure_GetBySelected(32)
            };
        }
    }
}