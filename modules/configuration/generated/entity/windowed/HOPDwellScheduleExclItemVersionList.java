package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleExclItem.eti;HOPDwellScheduleExclItem.eix;HOPDwellScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellScheduleExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellScheduleExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl bean);
  
  
  java.util.List<? extends entity.HOPDwellScheduleExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellSchExclItemExclVersionList> getScheduledItemClauseArray();
  
  
  
}