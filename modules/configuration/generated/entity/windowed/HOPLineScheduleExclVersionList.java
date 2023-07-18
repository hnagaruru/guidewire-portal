package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleExcl.eti;HOPLineScheduleExcl.eix;HOPLineScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleExclVersionList extends entity.windowed.HOPLineExclVersionList {
  entity.HOPLineScheduleExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineScheduleExclItem> HOPLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPLineScheduledItems(entity.HOPLineScheduleExclItem bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineScheduleExclItemVersionList> getHOPLineScheduledItems();
  
  
  
}