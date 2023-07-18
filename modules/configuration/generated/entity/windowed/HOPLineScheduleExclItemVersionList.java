package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleExclItem.eti;HOPLineScheduleExclItem.eix;HOPLineScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineScheduleExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPLineSchExclItemExcl bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineSchExclItemExclVersionList> getScheduledItemClauseArray();
  
  
  
}