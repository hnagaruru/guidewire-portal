package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleCondItem.eti;HOPDwellScheduleCondItem.eix;HOPDwellScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellScheduleCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellScheduleCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPDwellSchCondItemCond bean);
  
  
  java.util.List<? extends entity.HOPDwellScheduleCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellSchCondItemCondVersionList> getScheduledItemClauseArray();
  
  
  
}