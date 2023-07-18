package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateExcl.eti;BAStateExcl.eix;BAStateExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAStateExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAStateExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateExcl> getAllVersions();
  
  
  
}