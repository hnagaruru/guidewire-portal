package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsReceivable.eti;IMAccountsReceivable.eix;IMAccountsReceivable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsReceivableVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMAccountsReceivable AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToCoverages(entity.IMAccountsRecCov bean);
  
  
  java.util.List<? extends entity.IMAccountsReceivable> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecCovVersionList> getCoverages();
  
  
  
}