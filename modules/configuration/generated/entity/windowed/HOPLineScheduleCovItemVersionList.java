package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCovItem.eti;HOPLineScheduleCovItem.eix;HOPLineScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineScheduleCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineScheduleCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPLineSchCovItemCov bean);
  
  
  java.util.List<? extends entity.HOPLineScheduleCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineSchCovItemCovVersionList> getScheduledItemClauseArray();
  
  
  
}