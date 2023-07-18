package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCWaiverOfSubro.eti;WCWaiverOfSubro.eix;WCWaiverOfSubro.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCWaiverOfSubroVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCWaiverOfSubro AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCWaiverOfSubro> getAllVersions();
  
  
  
}