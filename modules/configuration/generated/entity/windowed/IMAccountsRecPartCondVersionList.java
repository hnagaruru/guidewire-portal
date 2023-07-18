package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCond.eti;IMAccountsRecPartCond.eix;IMAccountsRecPartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecPartCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMAccountsRecPartCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCond> getAllVersions();
  
  
  
}