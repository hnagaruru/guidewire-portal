package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCovItem.eti;GLLineScheduleCovItem.eix;GLLineScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineScheduleCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLLineScheduleCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.GLLineSchCovItemCov bean);
  
  
  java.util.List<? extends entity.GLLineScheduleCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLLineSchCovItemCovVersionList> getScheduledItemClauseArray();
  
  
  
}