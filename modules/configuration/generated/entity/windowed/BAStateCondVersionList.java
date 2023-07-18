package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCond.eti;BAStateCond.eix;BAStateCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAStateCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAStateCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCond> getAllVersions();
  
  
  
}