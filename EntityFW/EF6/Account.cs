namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Account")]
    public partial class Account
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(50)]
        public string User_emp { get; set; }

        [Required]
        [StringLength(50)]
        public string Password_emp { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Role_ID { get; set; }

        [StringLength(50)]
        public string Create_by { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Create_at { get; set; }

        [StringLength(50)]
        public string Update_by { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Update_at { get; set; }

        [StringLength(50)]
        public string Delete_by { get; set; }

        public DateTime? Delete_at { get; set; }
    }
}
