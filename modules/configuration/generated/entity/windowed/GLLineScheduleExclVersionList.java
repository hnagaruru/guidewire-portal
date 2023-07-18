package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleExcl.eti;GLLineScheduleExcl.eix;GLLineScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineScheduleExclVersionList extends entity.windowed.GeneralLiabilityExclVersionList {
  entity.GLLineScheduleExcl AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineScheduleExclItem> GLLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToGLLineScheduledItems(entity.GLLineScheduleExclItem bean);
  
  
  java.util.List<? extends entity.GLLineScheduleExcl> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLLineScheduleExclItemVersionList> getGLLineScheduledItems();
  
  
  
}