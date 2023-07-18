package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartExcl.eti;IMAccountsRecPartExcl.eix;IMAccountsRecPartExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecPartExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMAccountsRecPartExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartExcl> getAllVersions();
  
  
  
}