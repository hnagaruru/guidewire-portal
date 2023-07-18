package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoExcl.eti;PersonalAutoExcl.eix;PersonalAutoExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalAutoExclVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PersonalAutoExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoExcl> getAllVersions();
  
  
  
}