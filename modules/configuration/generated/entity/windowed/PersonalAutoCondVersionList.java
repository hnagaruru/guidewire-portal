package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCond.eti;PersonalAutoCond.eix;PersonalAutoCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalAutoCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PersonalAutoCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoCond> getAllVersions();
  
  
  
}