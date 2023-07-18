package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersCov.eti;BusinessOwnersCov.eix;BusinessOwnersCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessOwnersCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessOwnersCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BOPCovCost bean);
  
  
  java.util.List<? extends entity.BusinessOwnersCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPCovCostVersionList> getCosts();
  
  
  
}