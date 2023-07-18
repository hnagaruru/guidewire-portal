package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleCovItem.eti;HOPDwellScheduleCovItem.eix;HOPDwellScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellScheduleCovItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellScheduleCovItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPDwellSchCovItemCov bean);
  
  
  java.util.List<? extends entity.HOPDwellScheduleCovItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellSchCovItemCovVersionList> getScheduledItemClauseArray();
  
  
  
}