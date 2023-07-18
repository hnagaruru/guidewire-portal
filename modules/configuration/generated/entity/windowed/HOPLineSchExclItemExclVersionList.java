package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchExclItemExcl.eti;HOPLineSchExclItemExcl.eix;HOPLineSchExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineSchExclItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineSchExclItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineSchExclItemExcl> getAllVersions();
  
  
  
}