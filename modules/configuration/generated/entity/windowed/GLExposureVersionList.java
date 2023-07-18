package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLExposure.eti;GLExposure.eix;GLExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLExposureVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLExposure AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLCovExposureCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GLCovExposureCost bean);
  
  
  java.util.List<? extends entity.GLExposure> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLCovExposureCostVersionList> getCosts();
  
  
  
}