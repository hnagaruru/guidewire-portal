package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCExcludedWorkplace.eti;WCExcludedWorkplace.eix;WCExcludedWorkplace.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCExcludedWorkplaceVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCExcludedWorkplace AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCExcludedWorkplace> getAllVersions();
  
  
  
}