using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;

namespace Modules.Cms.Migrations
{
    /// <summary>
    /// Create Core Tables for CMS module
    /// </summary>

    [Profile("CMS")]
    [Migration(1113202011360000, "Create Core Table for CMS modules")]
    public class CreateCoreTables : MigrationBase
    {
        protected override void SetupTables()
        {
            CreateTableInCmsSchema("Feature")
                            .WithString("LayoutCode", 11).NotNullable()
                            .WithInt64("RowNumber", 1).NotNullable()
                            .WithInt64("ColNumber", 1).NotNullable();
            
            CreateTableInCmsSchema("AreaLayouts")
                            .WithString("LayoutCode", 11).NotNullable()
                            .WithInt64("RowNumber", 1).NotNullable()
                            .WithInt64("ColNumber", 1).NotNullable();

            CreateTableInCmsSchema("Areas")
                .WithString("Name", 20).NotNullable()
                .WithBool("Status", 1).NotNullable()
                .WithGuid("LayoutId").NotNullable();

            CreateTableInCmsSchema("AreaFeatures")
                .WithGuid("AreaId")
                .WithGuid("FeatureId")
                .WithGuid("AppUserId")
                .WithInt64("RowNumber", 1)
                .WithInt64("ColNumber", 1);

            CreateTableInCmsSchema("PageAreas")
                .WithGuid("AreaId")
                .WithGuid("PageId")
                .WithGuid("AppUserId")
                .WithBool("Status", 1);

            CreateTableInCmsSchema("Pages")
                .WithString("Title", 255).Nullable()
                .WithBool("Status", 1).NotNullable();



        }


    }
    public static class CreateTableWithColumnSyntaxExtension
    {
        public static ICreateTableColumnOptionOrWithColumnSyntax WithBool(this ICreateTableWithColumnSyntax table, string columnName, int defaultValue = true)
        {
            return table.WithColumn(columnName).AsBoolean().WithDefaultValue(defaultValue);
        }
        public static ICreateTableColumnOptionOrWithColumnSyntax WithGuid(this ICreateTableWithColumnSyntax table, string columnName, int defaultValue = true)
        {
            return table.WithColumn(columnName).AsGuid();
        }
        public static ICreateTableColumnOptionOrWithColumnSyntax WithInt64(this ICreateTableWithColumnSyntax table, string columnName, int defaultValue = 1)
        {
            return table.WithColumn(columnName).AsInt64().WithDefaultValue(defaultValue);
        }
        public static ICreateTableColumnOptionOrWithColumnSyntax WithString(this ICreateTableWithColumnSyntax table, string columnName, int length = 10)
        {
            return table.WithColumn(columnName).AsString(length);
        }
    }
    public class MigrationBase: AutoReversingMigration
    {
        public override void Up()
        {
            SetupTables();
        }

        protected virtual void SetupTables() { }
        protected ICreateTableColumnOptionOrWithColumnSyntax CreateTableInCmsSchema(string tableName)
        {
            return CreateTable(tableName, "CMS");
        }
        private ICreateTableColumnOptionOrWithColumnSyntax CreateTable(string tableName, string schemaName = "dbo")
        {
            return Create.Table(tableName).InSchema(schemaName)
                            .WithColumn("Id").AsGuid().PrimaryKey().WithDefaultValue(SystemMethods.NewGuid);
        }
    }
}
