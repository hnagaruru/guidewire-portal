package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuildingCov.eti;BOPBuildingCov.eix;BOPBuildingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPBuildingCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPBuildingCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPBuildingCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BOPBuildingCovCost bean);
  
  
  java.util.List<? extends entity.BOPBuildingCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPBuildingCovCostVersionList> getCosts();
  
  
  
}