package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAHiredSpecPerilCov.eti;BAHiredSpecPerilCov.eix;BAHiredSpecPerilCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAHiredSpecPerilCovVersionList extends entity.windowed.BAStateCovVersionList {
  entity.BAHiredSpecPerilCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BAStateCovCost bean);
  
  
  java.util.List<? extends entity.BAHiredSpecPerilCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BAStateCovCostVersionList> getCosts();
  
  
  
}