using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace W_Group.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mobilePhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userInfo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unitStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unitCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unitCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unitDistrict = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unitNotes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isInvestBefore = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    callAggrement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.userId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
