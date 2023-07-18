package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InclusionPerson.eti;InclusionPerson.eix;InclusionPerson.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface InclusionPersonVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.InclusionPerson AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.InclusionPerson> getAllVersions();
  
  
  
}