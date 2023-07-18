package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCoveredEmployee.eti;WCCoveredEmployee.eix;WCCoveredEmployee.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCCoveredEmployeeVersionList extends entity.windowed.WCCoveredEmployeeBaseVersionList {
  entity.WCCoveredEmployee AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCCovEmpCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.WCCovEmpCost bean);
  
  
  java.util.List<? extends entity.WCCoveredEmployee> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCCovEmpCostVersionList> getCosts();
  
  
  
}