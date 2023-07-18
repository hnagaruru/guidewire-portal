package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationCov.eti;BOPLocationCov.eix;BOPLocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPLocationCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPLocationCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPLocationCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BOPLocationCovCost bean);
  
  
  java.util.List<? extends entity.BOPLocationCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPLocationCovCostVersionList> getCosts();
  
  
  
}