package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCovItem.eti;HOPCovPartScheduleCovItem.eix;HOPCovPartScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartScheduleCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartScheduleCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPCovPartSchCovItemCov bean);
  
  
  java.util.List<? extends entity.HOPCovPartScheduleCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchCovItemCovVersionList> getScheduledItemClauseArray();
  
  
  
}