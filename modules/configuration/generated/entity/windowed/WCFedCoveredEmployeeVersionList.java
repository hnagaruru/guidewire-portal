package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCFedCoveredEmployee.eti;WCFedCoveredEmployee.eix;WCFedCoveredEmployee.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCFedCoveredEmployeeVersionList extends entity.windowed.WCCoveredEmployeeBaseVersionList {
  entity.WCFedCoveredEmployee AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCFedCoveredEmployee> getAllVersions();
  
  
  
}