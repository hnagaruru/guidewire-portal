package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoExcl.eti;BusinessAutoExcl.eix;BusinessAutoExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessAutoExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessAutoExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessAutoExcl> getAllVersions();
  
  
  
}