package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCov.eti;IMAccountsRecPartCov.eix;IMAccountsRecPartCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecPartCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMAccountsRecPartCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.IMAccountsRecPartCovCost bean);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecPartCovCostVersionList> getCosts();
  
  
  
}