package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleCov.eti;HOPDwellingScheduleCov.eix;HOPDwellingScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingScheduleCovVersionList extends entity.windowed.HOPDwellingCovVersionList {
  entity.HOPDwellingScheduleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellScheduleCovItem> HOPDwellScheduledItemsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingCovCost> HOPDwellingCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPDwellScheduledItems(entity.HOPDwellScheduleCovItem bean);
  
  
  void addToHOPDwellingCovCosts(entity.HOPDwellingCovCost bean);
  
  
  java.util.List<? extends entity.HOPDwellingScheduleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellScheduleCovItemVersionList> getHOPDwellScheduledItems();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingCovCostVersionList> getHOPDwellingCovCosts();
  
  
  
}