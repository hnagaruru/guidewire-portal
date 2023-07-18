package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCStateMultiplier.eti;WCStateMultiplier.eix;WCStateMultiplier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCStateMultiplierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCStateMultiplier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCStateMultiplier> getAllVersions();
  
  
  
}