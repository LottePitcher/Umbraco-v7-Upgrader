# Umbraco-v7-Upgrader

Use this repo to upgrade an Umbraco v7 database to v9.

## Notes

The process followed was as suggested by ProWorks in this blog post:

https://www.proworks.com/blog/archive/how-to-upgrade-umbraco-version-7-to-version-8

The upgrade process listed in this readme worked for an Umbraco database that started life as version **v7.12.4**. The site used nested content, various pickers etc but only core property editors, so several of the steps in the blog post were not relevant for this site.

## Process

Open `src/Umbraco-v7-Upgrader.sln` in Visual Studio and build.

### Step 1: Upgrade to v7.15.7

The v7.15.7 project in this solution is a 'vanilla' install of Umbraco with the following installed:

- ProWorks' [Our.Umbraco.Migrations](https://www.nuget.org/packages/Our.Umbraco.Migration/) package. This will perform some needed migrations when upgrading to v7 latest.
- Steve Megson's [Pre Migration Health Check](https://our.umbraco.com/packages/developer-tools/pre-migration-health-checks/) package. This adds a health check which can fix some issues before the v8 step.
- Dan Booth's [God Mode](https://our.umbraco.com/packages/developer-tools/diplo-god-mode/) package. This allows us to check what data types use nested content.

Steps to follow:

- Expand the `Umbraco-v7-15-7` project, and edit `web.config`:

   - Update `<add key="umbracoConfigurationStatus" value="" />`: set the value to be the **current** Umbraco version of your database
   - Update the `umbracoDbDSN` connection string to point to your database

- View the `Umbraco-v7-15-7` website in the browser and authorise the upgrade (don't worry that it reports the wrong current version in the dialog)

- Backoffice > Developer Section > Health Check > 'Migration' group

   - Click 'Check group'
   - Fix any issues reported

- Backoffice > Developer Section > God Mode > DataType Browser

   - Make a note of the data types that use the Umbraco.NestedContent property editor, and the document types that those data types references

### Step 2: Upgrade to v8.17.2

The v8.17.2 project in this solution is a 'vanilla' install of Umbraco with the following installed:

- The [ProWorks.Umbraco8.Migrations](https://www.nuget.org/packages/ProWorks.Umbraco8.Migrations/) package. This will perform some needed migrations when upgrading to v8 latest.

Steps to follow:

- Expand the `Umbraco-v8-17-2` project, and edit `web.config`:

   - Update the `umbracoDbDSN` connection string to point to your database

- View the website in the browser and authorise the upgrade

- Backoffice > Settings > Document Types

   - Check that all the nested content document types are flagged in 'Permissions' as 'Is an Element Type' (if not, update them and Save)

### Step 3: Upgrade to v9.2

The v9.2 project in this solution is a 'vanilla' install of Umbraco.

Steps to follow:

- Expand the `Umbraco-v9-2` project, and edit `appsettings.json`:

   - Update the `umbracoDbDSN` connection string to point to your database

- View the website in the browser and authorise the upgrade

## Acknowledgements

- Massive #H5YR to ProWorks for the blog post and the migration tools that they released

- Also to Steve Megson for the v7 Pre Migration health check package

- And finally to Dan Booth for the God Mode package that is an essential tool for understanding what's used where in an Umbraco install
