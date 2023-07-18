package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCStateCov.eti;WCStateCov.eix;WCStateCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCStateCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCStateCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCStateCov> getAllVersions();
  
  
  
}