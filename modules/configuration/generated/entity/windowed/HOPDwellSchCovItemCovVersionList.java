package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCovItemCov.eti;HOPDwellSchCovItemCov.eix;HOPDwellSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellSchCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellSchCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellSchCovItemCovCost> HOPDwellSchCovItemCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPDwellSchCovItemCovCosts(entity.HOPDwellSchCovItemCovCost bean);
  
  
  java.util.List<? extends entity.HOPDwellSchCovItemCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellSchCovItemCovCostVersionList> getHOPDwellSchCovItemCovCosts();
  
  
  
}