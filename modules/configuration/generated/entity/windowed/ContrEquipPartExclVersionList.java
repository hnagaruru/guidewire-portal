package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartExcl.eti;ContrEquipPartExcl.eix;ContrEquipPartExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContrEquipPartExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ContrEquipPartExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartExcl> getAllVersions();
  
  
  
}