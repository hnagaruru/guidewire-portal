package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingExcl.eti;HOPDwellingExcl.eix;HOPDwellingExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellingExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingExcl> getAllVersions();
  
  
  
}