package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCov.eti;HOPDwellingCov.eix;HOPDwellingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellingCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingCovCost> HOPDwellingCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPDwellingCovCosts(entity.HOPDwellingCovCost bean);
  
  
  java.util.List<? extends entity.HOPDwellingCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingCovCostVersionList> getHOPDwellingCovCosts();
  
  
  
}