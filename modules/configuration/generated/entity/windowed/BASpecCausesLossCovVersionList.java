package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BASpecCausesLossCov.eti;BASpecCausesLossCov.eix;BASpecCausesLossCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BASpecCausesLossCovVersionList extends entity.windowed.BusinessVehicleCovVersionList {
  entity.BASpecCausesLossCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicleCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BusinessVehicleCovCost bean);
  
  
  java.util.List<? extends entity.BASpecCausesLossCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BusinessVehicleCovCostVersionList> getCosts();
  
  
  
}