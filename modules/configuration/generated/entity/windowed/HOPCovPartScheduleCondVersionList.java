package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCond.eti;HOPCovPartScheduleCond.eix;HOPCovPartScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartScheduleCondVersionList extends entity.windowed.HOPCoveragePartCondVersionList {
  entity.HOPCovPartScheduleCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchCondItem> HOPCovPartScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPCovPartScheduledItems(entity.HOPCovPartSchCondItem bean);
  
  
  java.util.List<? extends entity.HOPCovPartScheduleCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchCondItemVersionList> getHOPCovPartScheduledItems();
  
  
  
}