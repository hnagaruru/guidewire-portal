package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCond.eti;GLLineScheduleCond.eix;GLLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineScheduleCondVersionList extends entity.windowed.GeneralLiabilityCondVersionList {
  entity.GLLineScheduleCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineScheduleCondItem> GLLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToGLLineScheduledItems(entity.GLLineScheduleCondItem bean);
  
  
  java.util.List<? extends entity.GLLineScheduleCond> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLLineScheduleCondItemVersionList> getGLLineScheduledItems();
  
  
  
}