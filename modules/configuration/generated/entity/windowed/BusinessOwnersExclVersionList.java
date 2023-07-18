package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersExcl.eti;BusinessOwnersExcl.eix;BusinessOwnersExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessOwnersExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessOwnersExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessOwnersExcl> getAllVersions();
  
  
  
}