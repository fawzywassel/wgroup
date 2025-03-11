using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace W_Group.Migrations
{
    /// <inheritdoc />
    public partial class AddUserUnitsInUserModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userUnits",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userUnits",
                table: "Users");
        }
    }
}
