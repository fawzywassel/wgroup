using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using W_Group.Migrations;
using W_Group.Models;

namespace W_Group.Controllers
{
    public class UserController : Controller
    {
        public readonly UserDBContext _db;

        public UserController(UserDBContext db)
        {
            _db = db;
        }

        [Route("getUsers")]
        [HttpGet]

        // GET: User
        public List<UserGetInfo> getUsers()
        {
            //List<User> users = _db.Users.Include(a => a.userUnits).ToList();
            List<User> users = _db.Users.ToList();
            List<UserGetInfo> UserGetInfoList = new List<UserGetInfo>();
            foreach (var user in users)
            {
                UserGetInfo info = new UserGetInfo()
                {
                    Id = user.userId,
                    firstName = user.firstName,
                    lastName = user.lastName,
                    email= user.email,
                    phoneNumber= user.phoneNumber,
                    userCountry = user.userCountry,
                    userCity= user.userCity,
                    userInfo = user.userInfo,
                    userUnits = user.userUnits,
                    unitStatus= user.unitStatus,
                    unitCountry= user.unitCountry,
                    unitCity= user.unitCity,
                    unitDistrict= user.unitDistrict,
                    promoCode = user.promoCode,
                    userRelation = user.userRelation,
                    isInvestBefore = user.isInvestBefore,
                    callAgreement = user.callAgreement,
                    unitInfo = user.userInfo
                };

                UserGetInfoList.Add(info);
            }
            return UserGetInfoList;
        }

        [Route("postUsers")]
        [HttpPost]

        // Post: User
        public async Task <IActionResult> postUsers([FromBody] User user)
        {
            try
            {
                await _db.Users.AddAsync(user);
                await _db.SaveChangesAsync();

                var createdUser = new
                {
                    userId = user.userId,
                };

                return Ok(createdUser);
            }catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
             
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            //Manually delete related entities
            //var relatedUnits = _db.Units.Where(u => u.User.userId == id).FirstOrDefault();
            //var relatedUnits = _db.Units.FirstOrDefault();
            //_db.Units.Remove(relatedUnits);

            var user = await _db.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _db.Users.Remove(user);
            await _db.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("DeleteAll")]
        public async Task<IActionResult> DeleteAll()
        {
            try
            {
                //_db.Units.RemoveRange(_db.Units);
                //await _db.SaveChangesAsync();

                _db.Users.RemoveRange(_db.Users);
                await _db.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
