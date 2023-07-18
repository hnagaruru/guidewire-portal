package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCond.eti;HOPLineScheduleCond.eix;HOPLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleCondVersionList extends entity.windowed.HOPLineCondVersionList {
  entity.HOPLineScheduleCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineScheduleCondItem> HOPLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPLineScheduledItems(entity.HOPLineScheduleCondItem bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineScheduleCondItemVersionList> getHOPLineScheduledItems();
  
  
  
}