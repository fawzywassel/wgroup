using System.ComponentModel.DataAnnotations.Schema;

namespace W_Group.Models
{
    [NotMapped]
    public class UserGetInfo : User
    {
        public int Id { get; set; }
    }
}
