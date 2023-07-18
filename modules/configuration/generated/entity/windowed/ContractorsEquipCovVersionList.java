package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipCov.eti;ContractorsEquipCov.eix;ContractorsEquipCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContractorsEquipCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ContractorsEquipCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.ContrEquipCovCost bean);
  
  
  java.util.List<? extends entity.ContractorsEquipCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ContrEquipCovCostVersionList> getCosts();
  
  
  
}