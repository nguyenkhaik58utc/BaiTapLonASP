namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EmailTemplate")]
    public partial class EmailTemplate
    {
        [Key]
        public int EmailTemplate_ID { get; set; }

        [Required]
        [StringLength(30)]
        public string Template_Type { get; set; }

        [Required]
        public string Tempate_Content { get; set; }

        [Required]
        public string Tempate_Subject { get; set; }
    }
}
