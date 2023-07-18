package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineExcl.eti;HOPLineExcl.eix;HOPLineExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineExcl> getAllVersions();
  
  
  
}