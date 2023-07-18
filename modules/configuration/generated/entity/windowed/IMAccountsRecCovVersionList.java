package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecCov.eti;IMAccountsRecCov.eix;IMAccountsRecCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMAccountsRecCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.IMAccountsRecCovCost bean);
  
  
  java.util.List<? extends entity.IMAccountsRecCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecCovCostVersionList> getCosts();
  
  
  
}