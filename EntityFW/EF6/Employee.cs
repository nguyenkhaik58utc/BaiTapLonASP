namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Employee")]
    public partial class Employee
    {
        [Key]
        [Column(Order = 0)]
        public int Employee_ID { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(50)]
        public string User_emp { get; set; }

        [Required]
        [StringLength(50)]
        public string Employee_Name { get; set; }

        [StringLength(50)]
        public string Department { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Date_Of_Birth { get; set; }

        [StringLength(4)]
        public string Sex { get; set; }

        [Column(TypeName = "ntext")]
        public string Images { get; set; }

        [StringLength(150)]
        public string Address_emp { get; set; }

        [StringLength(50)]
        public string Email_Address { get; set; }

        [StringLength(11)]
        public string Phone_Number { get; set; }

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

        [Column(TypeName = "date")]
        public DateTime? Delete_at { get; set; }

        public int Delete_flag { get; set; }
    }
}
