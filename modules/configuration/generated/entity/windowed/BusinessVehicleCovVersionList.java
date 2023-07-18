package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleCov.eti;BusinessVehicleCov.eix;BusinessVehicleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessVehicleCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessVehicleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicleCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BusinessVehicleCovCost bean);
  
  
  java.util.List<? extends entity.BusinessVehicleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BusinessVehicleCovCostVersionList> getCosts();
  
  
  
}