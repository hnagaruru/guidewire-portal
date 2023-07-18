package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCov.eti;GLLineScheduleCov.eix;GLLineScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineScheduleCovVersionList extends entity.windowed.GeneralLiabilityCovVersionList {
  entity.GLLineScheduleCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineScheduleCovItem> GLLineScheduledItemsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GLCovCost bean);
  
  
  void addToGLLineScheduledItems(entity.GLLineScheduleCovItem bean);
  
  
  java.util.List<? extends entity.GLLineScheduleCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.GLLineScheduleCovItemVersionList> getGLLineScheduledItems();
  
  
  
}