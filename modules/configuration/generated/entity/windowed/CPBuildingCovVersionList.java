package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCov.eti;CPBuildingCov.eix;CPBuildingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBuildingCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPBuildingCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBuildingCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.CPBuildingCovCost bean);
  
  
  java.util.List<? extends entity.CPBuildingCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPBuildingCovCostVersionList> getCosts();
  
  
  
}