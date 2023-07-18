package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCovItemCov.eti;HOPCovPartSchCovItemCov.eix;HOPCovPartSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartSchCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartSchCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchCovItemCovCost> HOPCovPartSchCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPCovPartSchCovItemCovCosts(entity.HOPCovPartSchCovItemCovCost bean);
  
  
  java.util.List<? extends entity.HOPCovPartSchCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchCovItemCovCostVersionList> getHOPCovPartSchCovItemCovCosts();
  
  
  
}