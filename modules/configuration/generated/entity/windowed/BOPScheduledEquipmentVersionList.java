package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPScheduledEquipment.eti;BOPScheduledEquipment.eix;BOPScheduledEquipment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPScheduledEquipmentVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPScheduledEquipment AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPScheduledEquipment> getAllVersions();
  
  
  
}