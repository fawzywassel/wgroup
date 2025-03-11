using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace W_Group.Migrations
{
    /// <inheritdoc />
    public partial class EditUserModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "unitNotes",
                table: "Users",
                newName: "userRelation");

            migrationBuilder.RenameColumn(
                name: "mobilePhone",
                table: "Users",
                newName: "unitInfo");

            migrationBuilder.RenameColumn(
                name: "code",
                table: "Users",
                newName: "promoCode");

            migrationBuilder.RenameColumn(
                name: "callAggrement",
                table: "Users",
                newName: "phoneNumber");

            migrationBuilder.AddColumn<string>(
                name: "callAgreement",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "callAgreement",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "userRelation",
                table: "Users",
                newName: "unitNotes");

            migrationBuilder.RenameColumn(
                name: "unitInfo",
                table: "Users",
                newName: "mobilePhone");

            migrationBuilder.RenameColumn(
                name: "promoCode",
                table: "Users",
                newName: "code");

            migrationBuilder.RenameColumn(
                name: "phoneNumber",
                table: "Users",
                newName: "callAggrement");
        }
    }
}
