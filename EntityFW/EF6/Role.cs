namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Role
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Role_ID { get; set; }

        [Required]
        [StringLength(20)]
        public string Role_Name { get; set; }
    }
}
