package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleExcl.eti;HOPCovPartScheduleExcl.eix;HOPCovPartScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartScheduleExclVersionList extends entity.windowed.HOPCoveragePartExclVersionList {
  entity.HOPCovPartScheduleExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchExclItem> HOPCovPartScheduledItemsAsOf(java.util.Date date);
  
  
  void addToHOPCovPartScheduledItems(entity.HOPCovPartSchExclItem bean);
  
  
  java.util.List<? extends entity.HOPCovPartScheduleExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCovPartSchExclItemVersionList> getHOPCovPartScheduledItems();
  
  
  
}