package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompCov.eti;WorkersCompCov.eix;WorkersCompCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WorkersCompCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WorkersCompCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCCovEmpCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.WCCovEmpCost bean);
  
  
  java.util.List<? extends entity.WorkersCompCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCCovEmpCostVersionList> getCosts();
  
  
  
}