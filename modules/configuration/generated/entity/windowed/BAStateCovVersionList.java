package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCov.eti;BAStateCov.eix;BAStateCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAStateCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAStateCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BAStateCovCost bean);
  
  
  java.util.List<? extends entity.BAStateCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BAStateCovCostVersionList> getCosts();
  
  
  
}