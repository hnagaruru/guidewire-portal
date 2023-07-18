package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchExclItem.eti;HOPCovPartSchExclItem.eix;HOPCovPartSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartSchExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartSchExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date);
  
  
  void addToScheduledItemClauseArray(entity.HOPCovPartSchExclItemExcl bean);
  
  
  java.util.List<? extends entity.HOPCovPartSchExclItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchExclItemExclVersionList> getScheduledItemClauseArray();
  
  
  
}