package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityCov.eti;GeneralLiabilityCov.eix;GeneralLiabilityCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GeneralLiabilityCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GeneralLiabilityCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.GLCovCost bean);
  
  
  java.util.List<? extends entity.GeneralLiabilityCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLCovCostVersionList> getCosts();
  
  
  
}