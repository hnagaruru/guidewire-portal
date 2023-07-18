package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCov.eti;HOPLineCov.eix;HOPLineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineCovCost> HOPLineCovCostsAsOf(java.util.Date date);
  
  
  void addToHOPLineCovCosts(entity.HOPLineCovCost bean);
  
  
  java.util.List<? extends entity.HOPLineCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineCovCostVersionList> getHOPLineCovCosts();
  
  
  
}