using FluentMigrator;

namespace Modules.Cms.Migrations
{
    [Profile("CMS")]
    [Migration(1113202011350000, "Create CMS Schema")]
    public class CreateCmsSchema : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("CMS");
        }
    }
}
