package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCond.eti;ContrEquipPartCond.eix;ContrEquipPartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContrEquipPartCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ContrEquipPartCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartCond> getAllVersions();
  
  
  
}