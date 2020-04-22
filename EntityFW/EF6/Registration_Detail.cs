namespace EntityFW.EF6
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Registration_Detail
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int OT_ID { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Registration_Date { get; set; }

        public TimeSpan? Time_Start { get; set; }

        public TimeSpan? Time_Finish { get; set; }

        [StringLength(150)]
        public string Reason { get; set; }

        [StringLength(150)]
        public string Reason_For_Cancel { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Status_flag { get; set; }

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
    }
}
