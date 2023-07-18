package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCondItem.eti;HOPCovPartSchCondItem.eix;HOPCovPartSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartSchCondItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartSchCondItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPCovPartSchCondItemCond bean);
  
  
  java.util.List<? extends entity.HOPCovPartSchCondItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchCondItemCondVersionList> getScheduledItemClauseArray();
  
  
  
}