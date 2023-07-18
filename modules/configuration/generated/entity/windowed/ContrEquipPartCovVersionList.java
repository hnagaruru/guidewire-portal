package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCov.eti;ContrEquipPartCov.eix;ContrEquipPartCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContrEquipPartCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ContrEquipPartCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.ContrEquipPartCovCost bean);
  
  
  java.util.List<? extends entity.ContrEquipPartCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ContrEquipPartCovCostVersionList> getCosts();
  
  
  
}