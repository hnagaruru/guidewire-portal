package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCov.eti;HOPLineScheduleCov.eix;HOPLineScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleCovVersionList extends entity.windowed.HOPLineCovVersionList {
  entity.HOPLineScheduleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineCovCost> HOPLineCovCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineScheduleCovItem> HOPLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPLineCovCosts(entity.HOPLineCovCost bean);
  
  
  void addToHOPLineScheduledItems(entity.HOPLineScheduleCovItem bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineCovCostVersionList> getHOPLineCovCosts();
  
  
  java.util.List<? extends entity.windowed.HOPLineScheduleCovItemVersionList> getHOPLineScheduledItems();
  
  
  
}