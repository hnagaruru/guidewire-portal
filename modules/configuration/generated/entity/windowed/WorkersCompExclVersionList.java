package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompExcl.eti;WorkersCompExcl.eix;WorkersCompExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WorkersCompExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WorkersCompExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WorkersCompExcl> getAllVersions();
  
  
  
}