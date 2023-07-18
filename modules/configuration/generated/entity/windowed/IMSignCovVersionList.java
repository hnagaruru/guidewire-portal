package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignCov.eti;IMSignCov.eix;IMSignCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMSignCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMSignCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMSignCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.IMSignCovCost bean);
  
  
  java.util.List<? extends entity.IMSignCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMSignCovCostVersionList> getCosts();
  
  
  
}