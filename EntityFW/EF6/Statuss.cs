namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Statuss")]
    public partial class Statuss
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Status_flag { get; set; }

        [Required]
        [StringLength(20)]
        public string Status_Name { get; set; }
    }
}
