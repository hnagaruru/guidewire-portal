package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchExclItemExcl.eti;HOPCovPartSchExclItemExcl.eix;HOPCovPartSchExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartSchExclItemExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartSchExclItemExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchExclItemExcl> getAllVersions();
  
  
  
}