namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("menu")]
    public partial class menu
    {
        [Key]
        public int menu_id { get; set; }

        [Required]
        [StringLength(50)]
        public string menu_name { get; set; }

        [Required]
        [StringLength(50)]
        public string menu_url { get; set; }

        public int menu_flag { get; set; }

        [Column(TypeName = "date")]
        public DateTime? create_at { get; set; }

        [Column(TypeName = "date")]
        public DateTime? update_at { get; set; }

        [StringLength(50)]
        public string create_by { get; set; }

        [StringLength(50)]
        public string update_by { get; set; }

        public int delete_flag { get; set; }

        [StringLength(50)]
        public string menu_screen { get; set; }
    }
}
