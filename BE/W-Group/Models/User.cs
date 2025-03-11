using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace W_Group.Models
{
    public class User
    {
        [Required]
        [Key]
        [JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int userId { get; set; } 
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string userCountry { get; set; }
        public string userCity { get; set; }
        public string userInfo { get; set; }
        public string userUnits  { get; set; }
        public string unitStatus { get; set; }
        public string promoCode { get; set; }
        public string userRelation { get; set; }
        public string isInvestBefore { get; set; }
        public string callAgreement  { get; set; }
        public string unitCountry { get; set; }
        public string unitCity { get; set; }
        public string unitDistrict { get; set; }
        public string unitInfo { get; set; }
    }

    //public class unit
    //{
    //    //[Key]
    //    //[JsonIgnore]
    //    //public int unitKey { get; set; }
    //    public string unitType { get; set; }
    //    //public User User { get; set; }
    //}

}
