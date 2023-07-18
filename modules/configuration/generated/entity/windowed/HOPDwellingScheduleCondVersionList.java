package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleCond.eti;HOPDwellingScheduleCond.eix;HOPDwellingScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingScheduleCondVersionList extends entity.windowed.HOPDwellingCondVersionList {
  entity.HOPDwellingScheduleCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellScheduleCondItem> HOPDwellScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPDwellScheduledItems(entity.HOPDwellScheduleCondItem bean);
  
  
  java.util.List<? extends entity.HOPDwellingScheduleCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellScheduleCondItemVersionList> getHOPDwellScheduledItems();
  
  
  
}