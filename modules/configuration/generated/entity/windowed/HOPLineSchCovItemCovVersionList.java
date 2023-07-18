package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchCovItemCov.eti;HOPLineSchCovItemCov.eix;HOPLineSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineSchCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineSchCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineSchCovItemCovCost> HOPLineSchCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPLineSchCovItemCovCosts(entity.HOPLineSchCovItemCovCost bean);
  
  
  java.util.List<? extends entity.HOPLineSchCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineSchCovItemCovCostVersionList> getHOPLineSchCovItemCovCosts();
  
  
  
}