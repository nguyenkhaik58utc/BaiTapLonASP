namespace EntityFW.EF6
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BigExampleDbContext : DbContext
    {
        public BigExampleDbContext()
            : base("name=BigExampleDbContext")
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<EmailTemplate> EmailTemplates { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<menu> menus { get; set; }
        public virtual DbSet<menu_mapping> menu_mapping { get; set; }
        public virtual DbSet<Registration> Registrations { get; set; }
        public virtual DbSet<Registration_Detail> Registration_Detail { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Statuss> Statusses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>()
                .Property(e => e.User_emp)
                .IsUnicode(false);

            modelBuilder.Entity<EmailTemplate>()
                .Property(e => e.Template_Type)
                .IsUnicode(false);

            modelBuilder.Entity<Employee>()
                .Property(e => e.User_emp)
                .IsUnicode(false);

            modelBuilder.Entity<Employee>()
                .Property(e => e.Email_Address)
                .IsUnicode(false);

            modelBuilder.Entity<Employee>()
                .Property(e => e.Phone_Number)
                .IsUnicode(false);

            modelBuilder.Entity<menu>()
                .Property(e => e.menu_screen)
                .IsUnicode(false);
        }
    }
}
