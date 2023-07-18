package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCov.eti;HOPCovPartScheduleCov.eix;HOPCovPartScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartScheduleCovVersionList extends entity.windowed.HOPCoveragePartCovVersionList {
  entity.HOPCovPartScheduleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartScheduleCovItem> HOPCovPartScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPCovPartScheduledItems(entity.HOPCovPartScheduleCovItem bean);
  
  
  java.util.List<? extends entity.HOPCovPartScheduleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartScheduleCovItemVersionList> getHOPCovPartScheduledItems();
  
  
  
}