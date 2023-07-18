package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCondItem.eti;HOPLineScheduleCondItem.eix;HOPLineScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineScheduleCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPLineSchCondItemCond bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineSchCondItemCondVersionList> getScheduledItemClauseArray();
  
  
  
}