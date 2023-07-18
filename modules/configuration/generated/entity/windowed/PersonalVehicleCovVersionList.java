package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicleCov.eti;PersonalVehicleCov.eix;PersonalVehicleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalVehicleCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PersonalVehicleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalVehicleCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.PersonalVehicleCovCost bean);
  
  
  java.util.List<? extends entity.PersonalVehicleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PersonalVehicleCovCostVersionList> getCosts();
  
  
  
}